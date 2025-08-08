// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  deleteUser,
  updateProfile,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  ref as rtdbRef,
  get as rtdbGet,
  child as rtdbChild,
  push as rtdbPush,
  onValue as rtdbOnValue,
  getDatabase,
  remove as rtdbRemove,
  set as rtdbSet,
} from 'firebase/database';
import {
  deleteObject,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
  listAll,
  ref as storageRef,
} from 'firebase/storage';

// Safe firebase config (fallback to empty strings if env missing)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || '',
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_APP_ID || '',
  measurementId: import.meta.env.VITE_MEASUREMENT_ID || '',
};

class Firebase {
  constructor() {
    // initialize only once
    if (!Firebase.instance) {
      const app = initializeApp(firebaseConfig);
      this.auth = getAuth(app);
      this.db = getFirestore(app);
      this.database = getDatabase(app);
      this.storage = getStorage(app);

      Firebase.instance = this;
    }
    return Firebase.instance;
  }

  // ---------- Helpers ----------
  getCurrentUser() {
    return this.auth?.currentUser || null;
  }

  getCurrentUserId() {
    return this.getCurrentUser()?.uid || null;
  }

  async safeUpdateDisplayName(name) {
    try {
      const user = this.getCurrentUser();
      if (!user || !name) return false;
      await updateProfile(user, { displayName: name });
      return true;
    } catch (e) {
      console.warn('safeUpdateDisplayName failed', e);
      return false;
    }
  }

  // ---------- Auth / Rooms ----------
  /**
   * Login logic:
   * - If isOwner and room doesn't exist -> sign in, create room (Firestore) and add to RTDB users
   * - If room exists and isOpen -> sign in and add to RTDB users
   * Returns true on success, false otherwise.
   */
  async login({ room_id, username, isOwner } = {}) {
    if (!room_id || !username) return false;

    try {
      const roomRef = doc(this.db, 'rooms', room_id);
      const snapDoc = await getDoc(roomRef);

      // create room (owner)
      if (isOwner && !snapDoc.exists()) {
        await signInAnonymously(this.auth);
        const uid = this.getCurrentUserId();
        if (!uid) return false;

        await setDoc(roomRef, {
          username,
          id: uid,
          participants: [username],
          isOpen: false,
        });

        await rtdbSet(rtdbRef(this.database, `${room_id}/users/${uid}`), {
          username,
          id: uid,
        });

        // try update display name (best-effort)
        await this.safeUpdateDisplayName(username);

        return true;
      }

      // join room if open
      if (snapDoc.exists() && snapDoc.data()?.isOpen) {
        await signInAnonymously(this.auth);
        const uid = this.getCurrentUserId();
        if (!uid) return false;

        await rtdbSet(rtdbRef(this.database, `${room_id}/users/${uid}`), {
          username,
          id: uid,
        });

        await this.safeUpdateDisplayName(username);
        return true;
      }
    } catch (error) {
      console.error('login error:', error);
      return false;
    }

    return false;
  }

  /**
   * Logout:
   * - If owner: delete Firestore room doc, RTDB tree, delete storage files, delete user
   * - If not owner: remove RTDB user entry, delete user
   *
   * This uses Promise.allSettled so a single failed step won't crash everything.
   */
  async logout({ room_id, isOwner } = {}) {
    const uid = this.getCurrentUserId();
    if (!room_id || !uid) return;

    try {
      const roomDoc = await getDoc(doc(this.db, 'rooms', room_id));
      const userSnap = await rtdbGet(rtdbChild(rtdbRef(this.database), `${room_id}/users/${uid}`));

      // If neither room nor RTDB user exist, just try deleting auth user
      if (!roomDoc.exists() && !userSnap.exists()) {
        try {
          await deleteUser(this.getCurrentUser());
        } catch (e) {
          console.warn('deleteUser failed (maybe needs recent auth)', e);
        }
        return;
      }

      if (isOwner) {
        await Promise.allSettled([
          deleteDoc(doc(this.db, 'rooms', room_id)).catch((e) => {
            console.warn('deleteDoc failed', e);
          }),
          rtdbRemove(rtdbRef(this.database, room_id)).catch((e) => {
            console.warn('rtdbRemove failed', e);
          }),
          this.deleteFiles(room_id).catch((e) => {
            console.warn('deleteFiles failed', e);
          }),
          (async () => {
            try {
              await deleteUser(this.getCurrentUser());
            } catch (e) {
              console.warn('deleteUser failed (owner logout)', e);
            }
          })(),
        ]);
        return;
      }

      // non-owner
      await Promise.allSettled([
        rtdbRemove(rtdbRef(this.database, `${room_id}/users/${uid}`)).catch((e) => {
          console.warn('rtdbRemove user failed', e);
        }),
        (async () => {
          try {
            await deleteUser(this.getCurrentUser());
          } catch (e) {
            console.warn('deleteUser failed (non-owner logout)', e);
          }
        })(),
      ]);
    } catch (error) {
      console.error('logout error:', error);
    }
  }

  /**
   * Check Room ID exists in both Firestore and RTDB
   */
  async checkRoomId(room_id) {
    if (!room_id) return false;
    try {
      const [dbSnap, rtdbSnap] = await Promise.all([
        getDoc(doc(this.db, 'rooms', room_id)),
        rtdbGet(rtdbChild(rtdbRef(this.database), room_id)),
      ]);
      return !!dbSnap.exists() && !!rtdbSnap.exists();
    } catch (e) {
      console.error('checkRoomId error:', e);
      return false;
    }
  }

  /**
   * Toggle allow participants (owner only)
   * callback receives newIsOpen boolean if provided
   */
  async allowParticipants(room_id, callback, allow) {
    if (!room_id) return false;
    try {
      const snapShot = await getDoc(doc(this.db, 'rooms', room_id));
      if (!snapShot.exists()) return false;

      const uid = this.getCurrentUserId();
      if (uid && uid === snapShot.data()?.id) {
        const newIsOpen = !allow;
        await updateDoc(doc(this.db, 'rooms', room_id), { isOpen: newIsOpen });
        try {
          callback?.(newIsOpen);
        } catch (e) {
          console.warn('allowParticipants callback error', e);
        }
        return true;
      }
    } catch (e) {
      console.error('allowParticipants error:', e);
    }
    return false;
  }

  /**
   * isOwnerLogout: if current user is owner -> perform owner logout and return true
   * otherwise perform member logout and return false
   */
  async isOwnerLogout(room_id) {
    if (!room_id) return false;
    const uid = this.getCurrentUserId();
    if (!uid) return false;

    try {
      const roomRef = doc(this.db, 'rooms', room_id);
      const docSnap = await getDoc(roomRef);

      if (docSnap.exists()) {
        if (docSnap.data()?.id === uid) {
          await this.logout({ room_id, isOwner: true });
          return true;
        } else {
          await this.logout({ room_id, isOwner: false });
          return false;
        }
      }

      // If room doesn't exist, try to delete user and return false
      try {
        await deleteUser(this.getCurrentUser());
      } catch (e) {
        console.warn('deleteUser failed in isOwnerLogout', e);
      }
      return false;
    } catch (e) {
      console.error('isOwnerLogout error:', e);
      return false;
    }
  }

  // ---------- Username / Participants ----------
  /**
   * Check username availability in RTDB users list
   * Returns true if available
   */
  async isUsernameAvailable(room_id, username) {
    if (!room_id || !username) return false;
    try {
      const snapshot = await rtdbGet(rtdbChild(rtdbRef(this.database), `${room_id}/users`));
      if (!snapshot.exists()) return true;

      let available = true;
      snapshot.forEach((userSnap) => {
        const u = userSnap.val();
        if (!u) return;
        if (u.username === username) {
          // allow if same id as current user
          available = u.id === this.getCurrentUserId();
          return true; // continue forEach, but we already found a collision
        }
      });
      return available;
    } catch (e) {
      console.error('isUsernameAvailable error:', e);
      return false;
    }
  }

  async getRoomOwner(room_id) {
    if (!room_id) return '';
    try {
      const docSnap = await getDoc(doc(this.db, 'rooms', room_id));
      return docSnap.exists() ? docSnap.data()?.username || '' : '';
    } catch (e) {
      console.error('getRoomOwner error:', e);
      return '';
    }
  }

  async getCurrentUserDetails(room_id) {
    if (!room_id || !this.getCurrentUserId()) return '';
    try {
      const result = await rtdbGet(rtdbRef(this.database, `${room_id}/users/${this.getCurrentUserId()}`));
      return result.exists() ? result.val()?.username || '' : '';
    } catch (e) {
      console.error('getCurrentUserDetails error:', e);
      return '';
    }
  }

  async isOwner(room_id) {
    if (!room_id || !this.getCurrentUserId()) return false;
    try {
      const docSnap = await getDoc(doc(this.db, 'rooms', room_id));
      return docSnap.exists() && docSnap.data()?.id === this.getCurrentUserId();
    } catch (e) {
      console.error('isOwner error:', e);
      return false;
    }
  }

  /**
   * Check if a user entry exists in RTDB. If not and currentUser exists, deletes that auth user.
   */
  async isMeExist(room_id, id = null) {
    const uid = id || this.getCurrentUserId();
    if (!room_id || !uid) return false;

    try {
      const userSnap = await rtdbGet(rtdbRef(this.database, `${room_id}/users/${uid}`));
      if (!userSnap.exists() && this.getCurrentUser()) {
        try {
          await deleteUser(this.getCurrentUser());
        } catch (e) {
          console.warn('deleteUser failed in isMeExist', e);
        }
        return false;
      }
      return true;
    } catch (e) {
      console.error('isMeExist error:', e);
      return false;
    }
  }

  // ---------- RTDB listeners ----------
  /**
   * onValueChange - listens once for current user's node in RTDB.
   * callback receives id if username missing in snapshot.
   */
  onValueChange(room_id, callback) {
    const id = this.getCurrentUserId();
    if (!id || !room_id) return;

    try {
      rtdbOnValue(
        rtdbRef(this.database, `${room_id}/users/${id}`),
        (snapShot) => {
          const username = snapShot.val()?.username;
          if (!username) {
            try {
              callback?.(id);
            } catch (e) {
              console.warn('onValueChange callback failed', e);
            }
          }
        },
        { onlyOnce: true }
      );
    } catch (e) {
      console.error('onValueChange error:', e);
    }
  }

  async removeParticipant(room_id, id) {
    if (!room_id || !id) return false;
    try {
      if (!(await this.isOwner(room_id))) return false;

      const docSnap = await getDoc(doc(this.db, 'rooms', room_id));
      const userSnap = await rtdbGet(rtdbChild(rtdbRef(this.database), `${room_id}/users/${id}`));
      if (!docSnap.exists() || !userSnap.exists()) return false;

      await rtdbRemove(rtdbRef(this.database, `${room_id}/users/${id}`));
      return true;
    } catch (e) {
      console.error('removeParticipant error:', e);
      return false;
    }
  }

  async getParticipantName(room_id, userid) {
    if (!room_id || !userid) return '';
    try {
      const docRef = doc(this.db, `rooms/${room_id}/participants`, userid.toString());
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? docSnap.data()?.username || '' : '';
    } catch (e) {
      console.error('getParticipantName error:', e);
      return '';
    }
  }

  // ---------- Messages ----------
  /**
   * sendMessage pushes a message into RTDB messages list
   * message: string, id: sender id, username: sender name, roomId: room id, time: timestamp
   * download: optional url
   */
  async sendMessage({ message, id, username, roomId, time, download = null } = {}) {
    if (!message || !id || !username || !roomId || !time) return false;
    if (this.getCurrentUserId() !== id) return false;

    try {
      const messages = { message, id, username, time, download };
      await rtdbPush(rtdbChild(rtdbRef(this.database), `${roomId}/messages`), messages);
      return true;
    } catch (e) {
      console.error('sendMessage error:', e);
      return false;
    }
  }

  /**
   * getMessages: reads messages from RTDB once and sets them via setMessages
   * Note: setMessages should be a setter function (e.g. React state setter)
   */
  async getMessages(room_id, setMessages, messages = []) {
    if (!room_id || typeof setMessages !== 'function') return;

    try {
      const snap = await rtdbGet(rtdbChild(rtdbRef(this.database), `${room_id}/messages`));
      if (!snap.exists()) return;

      const list = [];
      snap.forEach((docSnap) => {
        list.push(docSnap.val());
      });

      // use numChildren for RTDB count
      if (snap.numChildren() === list.length && messages.length !== list.length) {
        setMessages(list);
      }
    } catch (e) {
      console.error('getMessages error:', e);
    }
  }

  // ---------- Members ----------
  async getMembers(room_id, callbackMember) {
    if (!room_id || typeof callbackMember !== 'function') return;
    try {
      const res = await rtdbGet(rtdbChild(rtdbRef(this.database), `${room_id}/users`));
      if (!res.exists()) return;

      const list = [];
      res.forEach((snap) => {
        const { username, id } = snap.val() || {};
        if (username && id) list.push({ username, id });
      });
      callbackMember(list);
    } catch (error) {
      console.error('getMembers error:', error);
    }
  }

  // ---------- Storage / Files ----------
  /**
   * sendFile: upload binary (ArrayBuffer | Uint8Array | Blob) to storage
   * - sender, filename, content (ArrayBuffer/Uint8Array/Blob), room_id, time
   * - callback(url) on success
   * - onProgress({ loaded, total, lengthComputable })
   */
  sendFile(sender, filename, content, room_id, time, callback, onProgress) {
    if (!sender || !filename || !content || !room_id || !time) return false;

    try {
      // convert content to Uint8Array if it's an ArrayBuffer
      let fileContent = content;
      if (content instanceof ArrayBuffer) {
        fileContent = new Uint8Array(content);
      } else if (ArrayBuffer.isView(content)) {
        fileContent = new Uint8Array(content.buffer);
      }

      const fileRef = storageRef(this.storage, `${room_id}/${time} time:${filename}`);
      const uploadTask = uploadBytesResumable(fileRef, fileContent);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / (snapshot.totalBytes || 1)) * 100;
          onProgress?.({
            loaded: snapshot.bytesTransferred,
            total: snapshot.totalBytes,
            lengthComputable: !!snapshot.totalBytes,
            progress,
          });
        },
        (error) => {
          console.error('upload error:', error);
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            try {
              callback?.(url);
            } catch (e) {
              console.warn('sendFile callback failed', e);
            }
          } catch (e) {
            console.error('getDownloadURL failed', e);
          }
        }
      );

      return true;
    } catch (e) {
      console.error('sendFile error:', e);
      return false;
    }
  }

  /**
   * getMediaFiles: list files under room_id and return list of { filename, downloadUrl } via callback
   */
  async getMediaFiles(room_id, callback, setIsLoading) {
    if (!room_id) {
      setIsLoading?.(false);
      return;
    }

    try {
      setIsLoading?.(true);
      const res = await listAll(storageRef(this.storage, room_id));
      if (!res || !res.items || res.items.length === 0) {
        callback?.([]);
        setIsLoading?.(false);
        return;
      }

      const promises = res.items.map((item) =>
        getDownloadURL(storageRef(this.storage, item.fullPath))
          .then((url) => ({ filename: item.name, downloadUrl: url }))
          .catch((err) => {
            console.warn(`Failed to get URL for ${item.name}:`, err);
            return null;
          })
      );

      const results = await Promise.allSettled(promises);
      const list = results
        .filter((r) => r.status === 'fulfilled' && r.value)
        .map((r) => r.value);

      callback?.(list);
    } catch (e) {
      console.error('getMediaFiles error:', e);
      callback?.([]);
    } finally {
      setIsLoading?.(false);
    }
  }

  async getFileCount(room_id) {
    if (!room_id) return 0;
    try {
      const res = await listAll(storageRef(this.storage, room_id));
      return res?.items?.length || 0;
    } catch (e) {
      console.error('getFileCount error:', e);
      return 0;
    }
  }

  async deleteFiles(room_id) {
    if (!room_id) return false;
    try {
      const res = await listAll(storageRef(this.storage, room_id));
      if (!res?.items || res.items.length === 0) return true;

      await Promise.allSettled(
        res.items.map((item) => deleteObject(storageRef(this.storage, item.fullPath)).catch((err) => {
          console.warn('deleteObject failed for', item.fullPath, err);
        }))
      );
      return true;
    } catch (e) {
      console.error('deleteFiles error:', e);
      return false;
    }
  }

  // ---------- Auth state ----------
  onAuthStateChanged(callback) {
    try {
      firebaseOnAuthStateChanged(this.auth, callback);
    } catch (e) {
      console.error('onAuthStateChanged error:', e);
    }
  }
}


export default Firebase;
