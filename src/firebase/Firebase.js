import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  deleteUser,
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
  ref,
  get,
  child,
  push,
  onValue,
  getDatabase,
  remove,
  set,
} from 'firebase/database';
import {
  deleteObject,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
  listAll,
  ref as storageRef,
  uploadBytes,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
    this.database = getDatabase(app);
    this.storage = getStorage(app);
  }

  async login({ room_id, username, isOwner }) {
    if (!room_id || !username) return false;

    const roomRef = doc(this.db, 'rooms', room_id);
    const snapDoc = await getDoc(roomRef);

    if (isOwner && !snapDoc.exists()) {
      await signInAnonymously(this.auth);
      await setDoc(roomRef, {
        username,
        id: this.auth.currentUser.uid,
        participants: [username],
        isOpen: false,
      });
      await set(
        ref(this.database, `${room_id}/users/${this.auth.currentUser.uid}`),
        { username, id: this.auth.currentUser.uid }
      );
      this.auth.currentUser.displayName = username;
      return true;
    }

    if (snapDoc.exists() && snapDoc.data().isOpen) {
      await signInAnonymously(this.auth);
      await set(
        ref(this.database, `${room_id}/users/${this.auth.currentUser.uid}`),
        { username, id: this.auth.currentUser.uid }
      );
      this.auth.currentUser.displayName = username;
      return true;
    }

    return false;
  }

  async logout({ room_id, isOwner }) {
    if (!room_id || !this.auth.currentUser) return;

    try {
      const roomDoc = await getDoc(doc(this.db, 'rooms', room_id));
      const userSnap = await get(child(ref(this.database), `${room_id}/users/${this.auth.currentUser.uid}`));

      if (!roomDoc.exists() && !userSnap.exists()) {
        await deleteUser(this.auth.currentUser);
        return;
      }

      if (isOwner) {
        await Promise.all([
          deleteDoc(doc(this.db, 'rooms', room_id)),
          remove(ref(this.database, room_id)),
          this.deleteFiles(room_id),
          deleteUser(this.auth.currentUser),
        ]);
        return;
      }

      await Promise.all([
        remove(ref(this.database, `${room_id}/users/${this.auth.currentUser.uid}`)),
        deleteUser(this.auth.currentUser),
      ]);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  async checkRoomId(room_id) {
    if (!room_id) return false;
    const [dbSnap, rtdbSnap] = await Promise.all([
      getDoc(doc(this.db, 'rooms', room_id)),
      get(child(ref(this.database), room_id)),
    ]);
    return dbSnap.exists() && rtdbSnap.exists();
  }

  async allowParticipants(room_id, callback, allow) {
    const snapShot = await getDoc(doc(this.db, 'rooms', room_id));
    if (!snapShot.exists()) return false;

    if (this.auth.currentUser?.uid === snapShot.data().id) {
      const newIsOpen = !allow;
      await updateDoc(doc(this.db, 'rooms', room_id), { isOpen: newIsOpen });
      callback(newIsOpen);
    }
  }

  async isOwnerLogout(room_id) {
    const roomRef = doc(this.db, 'rooms', room_id);
    const docSnap = await getDoc(roomRef);

    if (!this.auth.currentUser) return false;

    if (docSnap.exists()) {
      if (docSnap.data().id === this.auth.currentUser.uid) {
        await this.logout({ room_id, isOwner: true });
        return true;
      } else {
        await this.logout({ room_id, isOwner: false });
        return false;
      }
    }

    await deleteUser(this.auth.currentUser);
    return false;
  }

  async isUsernameAvailable(room_id, username) {
    if (!room_id || !username) return false;

    const snapshot = await get(child(ref(this.database), `${room_id}/users`));
    if (!snapshot.exists()) return true;

    let available = true;
    snapshot.forEach((user) => {
      if (user.val().username === username) {
        // Allow if current user's username matches
        available = user.val().id === this.auth.currentUser?.uid;
        return false; // break loop
      }
    });
    return available;
  }

  async getRoomOwner(room_id) {
    const docSnap = await getDoc(doc(this.db, 'rooms', room_id));
    return docSnap.exists() ? docSnap.data().username : '';
  }

  getCurrentUser() {
    return this.auth.currentUser?.uid || null;
  }

  onValueChange(room_id, callback) {
    const id = this.getCurrentUser();
    if (!id) return;

    onValue(
      ref(this.database, `${room_id}/users/${id}`),
      (snapShot) => {
        const username = snapShot.val()?.username;
        if (!username) callback(id);
      },
      { onlyOnce: true }
    );
  }

  async removeParticipant(room_id, id) {
    if (!room_id || !id) return;
    if (!(await this.isOwner(room_id))) return;

    const docSnap = await getDoc(doc(this.db, 'rooms', room_id));
    const userSnap = await get(child(ref(this.database), `${room_id}/users/${id}`));
    if (!docSnap.exists() || !userSnap.exists()) return;

    await remove(ref(this.database, `${room_id}/users/${id}`));
  }

  async getCurrentUserDetails(room_id) {
    if (!room_id || !this.auth.currentUser) return '';

    try {
      const result = await get(ref(this.database, `${room_id}/users/${this.auth.currentUser.uid}`));
      return result.exists() ? result.val().username : '';
    } catch (e) {
      console.error(e);
      return '';
    }
  }

  async isOwner(room_id) {
    if (!room_id || !this.auth.currentUser) return false;

    const docSnap = await getDoc(doc(this.db, 'rooms', room_id));
    return docSnap.exists() && docSnap.data().id === this.auth.currentUser.uid;
  }

  async isMeExist(room_id, id = this.auth.currentUser?.uid) {
    if (!room_id || !id) return false;

    const userSnap = await get(ref(this.database, `${room_id}/users/${id}`));
    if (!userSnap.exists() && this.auth.currentUser) {
      await deleteUser(this.auth.currentUser);
      return false;
    }
    return true;
  }

  onAuthStateChanged(callback) {
    onAuthStateChanged(this.auth, callback);
  }

  async getParticipantName(room_id, userid) {
    if (!room_id || !userid) return '';
    const docRef = doc(this.db, `rooms/${room_id}/participants`, userid.toString());
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data().username : '';
  }

  async sendMessage({ message, id, username, roomId, time, download = null }) {
    if (!message || !id || !username || !roomId || !time) return;
    if (this.auth.currentUser?.uid !== id) return;

    const messages = { message, id, username, time, download };
    await push(child(ref(this.database), `${roomId}/messages`), messages);
  }

  async getMessages(room_id, setMessages, messages = []) {
    if (!room_id) return;

    const snap = await get(child(ref(this.database), `${room_id}/messages`));
    if (!snap.exists()) return;

    const list = [];
    snap.forEach((doc) => list.push(doc.val()));

    if (snap.size === list.length && messages.length !== list.length) {
      setMessages(list);
    }
  }

  async getMembers(room_id, callbackMember) {
    if (!room_id) return;

    try {
      const res = await get(child(ref(this.database), `${room_id}/users`));
      if (!res.exists()) return;

      const list = [];
      res.forEach((snap) => {
        const { username, id } = snap.val();
        list.push({ username, id });
      });
      callbackMember(list);
    } catch (error) {
      console.error(error);
    }
  }

  sendFile(sender, filename, content, room_id, time, callback, onProgress) {
    if (!sender || !filename || !content || !room_id || !time) return;

    const fileContent = new Uint8Array(content);
    const fileRef = storageRef(this.storage, `${room_id}/${time} time:${filename}`);

    const uploadTask = uploadBytesResumable(fileRef, fileContent);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress?.({
          loaded: snapshot.bytesTransferred,
          total: snapshot.totalBytes,
          lengthComputable: true,
        });
      },
      (error) => {
        console.error(error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        callback(url);
      }
    );
  }

  async getMediaFiles(room_id, callback, setIsLoading) {
    if (!room_id) {
      setIsLoading?.(false);
      return;
    }

    try {
      const res = await listAll(storageRef(this.storage, room_id));
      if (res.items.length === 0) {
        setIsLoading?.(false);
        return;
      }

      const promises = res.items.map((item) =>
        getDownloadURL(storageRef(this.storage, item.fullPath))
          .then((url) => ({
            filename: item.name,
            downloadUrl: url,
          }))
          .catch((err) => {
            console.warn(`Failed to get URL for ${item.name}:`, err);
            return null; // Skip failed downloads
          })
      );

      const results = await Promise.allSettled(promises);
      const list = results
        .filter((res) => res.status === 'fulfilled' && res.value !== null)
        .map((res) => res.value);

      callback?.(list);
    } catch (e) {
      console.error('ERROR!', e);
    } finally {
      setIsLoading?.(false);
    }
  }

  async getFileCount(room_id) {
    if (!room_id) return 0;

    try {
      const res = await listAll(storageRef(this.storage, room_id));
      return res.items.length;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  async deleteFiles(room_id) {
    if (!room_id) return;

    try {
      const res = await listAll(storageRef(this.storage, room_id));
      if (res.items.length === 0) return;

      await Promise.all(
        res.items.map((item) => deleteObject(storageRef(this.storage, item.fullPath)))
      );
    } catch (e) {
      console.error(e);
    }
  }
}

export default Firebase;
