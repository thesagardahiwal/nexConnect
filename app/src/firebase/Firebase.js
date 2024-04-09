import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  deleteUser,
  signOut,
} from 'firebase/auth';
import { getFirestore, doc, arrayRemove, setDoc, getDoc, deleteDoc, collection, updateDoc, arrayUnion, addDoc, getDocs, where, query, deleteField } from 'firebase/firestore';
import { ref, get, child, push, onValue, getDatabase, remove, set } from 'firebase/database';
import { deleteObject, getDownloadURL, getStorage, list, listAll, ref as Ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

class Firebase {
  
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
    this.database = getDatabase(app);
    this.storage = getStorage(app);
  }

  login = async ({room_id, username, isOwner}) => {
    if (!room_id && !username) return false;
    const roomRef = doc(this.db, 'rooms', room_id)
    const snapDoc = await getDoc(roomRef);
    if (isOwner && !snapDoc.exists()) {
      await signInAnonymously(this.auth);
      await setDoc(roomRef, { 
        username,
        id: this.auth.currentUser.uid,
        participants: [username],
        isOpen: false
      });
      await set(ref(this.database, `${room_id}/users/`+this.auth.currentUser.uid), {
        username: username,
        id: this.auth.currentUser.uid,
        
      });
      this.auth.currentUser.displayName = username;
      return true;
    }
    if (snapDoc.exists() && snapDoc.data().isOpen) {
      await signInAnonymously(this.auth);
      await set(ref(this.database, `${room_id}/users/`+this.auth.currentUser.uid), {
        username: username,
        id: this.auth.currentUser.uid
      });
      this.auth.currentUser.displayName = username;
      return true;
    }
    return false;

  };

  logout = async ({room_id, isOwner}) => {
    try {
      if (!room_id) return;
        const docSnap = await getDoc(doc(this.db, "rooms", room_id));
        const responce = await get(child(ref(this.database), `${room_id}/users/`+this.auth.currentUser.uid))
        if (!docSnap.exists() && !responce.exists()) {
          if(!this.auth.currentUser) return;
          deleteUser(this.auth.currentUser);
          return;
        }
        if (isOwner) {
          if (!this.auth.currentUser) return;
          await deleteDoc(doc(this.db, "rooms", room_id));
          await remove(ref(this.database, `${room_id}`));
          await this.deleteFiles(room_id);
          await deleteUser(this.auth.currentUser);
          return;
        }
        if (this.auth.currentUser) return;
        await remove(ref(this.database, `${room_id}/users/`+this.auth.currentUser.uid));
        await deleteUser(this.auth.currentUser);
      } catch (error) {
        console.error('Logout error:', error);
      }
  };

  checkRoomId = async (room_id) => {
    const result = await get(child(ref(this.database), room_id))
    if (!result.exists()) return false;
    const docSnap = await getDoc(doc(this.db, 'rooms', room_id));
    if(!docSnap.exists()) return false;
    return true;

  };

  allowParticipants = async (room_id, callback, allow) => {
    const snapShot = await getDoc(doc(this.db, "rooms", room_id));
    if (!snapShot.exists()) return false;
    if (this.auth.currentUser.uid === snapShot.data().id) {
      await updateDoc(doc(this.db, "rooms", room_id), {
        isOpen: allow ? false : true
      });
      callback(snapShot.data().isOpen);
    }
  }


  isOwnerLogout = async (room_id) => {
    const roomRef = doc(this.db, "rooms", room_id);
    const docSnap = await getDoc(roomRef);
    if(docSnap.exists() && docSnap.data().id === this.auth.currentUser.uid) {
      await this.logout({room_id: room_id, isOwner: true});
      
    } else if (docSnap.exists()) {
      await this.logout({room_id: room_id, isOwner: false});

    } else {
      await deleteUser(this.auth.currentUser);
    }
    return true;
  }

  isUsernameAvailable = async (room_id, username) => {
    const snapshot = await get(child(ref(this.database), `${room_id}/users/`));
    if (snapshot.exists()) {
      let result = true;
      snapshot.forEach((user) => {
        if (username === user.val().username) {
          result = false;
          if (user.val().id === this.auth.currentUser?.uid) {
            result = true;
          }
        }
      })
      return result
    }
  }

  getRoomOwner = async (room_id) => {
    const docSnap = await getDoc(doc(this.db, "rooms", room_id));
    if (!docSnap.exists()) return '';
    return docSnap.data().username;
  }

  getCurrentUser = () => {
    const id = this.auth.currentUser?.uid;
    return id;
  }

  onValueChange = async (room_id) => {
    const id = this.auth.currentUser?.uid;
    if (!id) return;
    onValue(ref(this.database, `${room_id}/users/`+id), (snapShot) => {
      const username = (snapShot.val() && snapShot.val().username) || "Avatar";
    }, {
      onlyOnce: true
    })
  }

  removeParticipant = async (room_id, id) => {
      if (!room_id && !id) return;
      const docSnap = await getDoc(doc(this.db, "rooms", room_id));
      const responce = await get(child(ref(this.database), `${room_id}/users/`+id))
      if (!docSnap.exists() && !responce.exists()) return;
      await remove(ref(this.database, `${room_id}/users/`+id));
  }

  getCurrentUserDetails = async (room_id) => {
    try {
      const result = await get(ref(this.database, `${room_id}/users/`+this.auth.currentUser?.uid))
      if(!result.exists()) return '';
      return result.val().username;
    } catch (e) {
      console.log(e);
    }
  }

  isOwner = async (room_id) => {
    const docSnap = await getDoc(doc(this.db, "rooms", room_id));
    if (docSnap.exists()) return docSnap.data().id == this.auth.currentUser?.uid;
  }

  isMeExist = async (room_id, id) => {
    if (!room_id) return;
    const docSnap = await get(ref(this.database, `${room_id}/users/${id}`));
    if (!docSnap.exists()) {
      if (!this.auth.currentUser) return;
      await deleteUser(this.auth.currentUser);
    } 
    
  }

  onAuthStateChanged = (callback) => {
    onAuthStateChanged(this.auth, callback);
  };

  getParticipantName = async (room_id, userid) => {
    const docRef = doc(this.db, `rooms/${room_id}/participants`, userid.toString());
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) return docSnap.data().username;
    return '';
  }


  sendMessage = async ({message, id, username, roomId, time}) => {
        if (!username || !message || !id || !roomId || !time) return;
        if (this.auth.currentUser?.uid != id ) return;
        const messages = {
          message,
          id,
          username,
          time
        };
        // Broadcast the message to all connected clients
        await push(child(ref(this.database), `${roomId}/messages`), messages);
  };
  
  getMessages = (room_id, setMessages) => {
    get(child(ref(this.database), `${room_id}/messages`)).then((snap) => {
      if(snap.exists()) {
        snap.forEach((doc) => {
          setMessages((prev) => [...prev, doc.val()])
        })
      }
    })
  };

  

  getMembers = async (room_id, callbackMember) => {
    try {
      const res = await get(child(ref(this.database), `${room_id}/users`))
      if (res.exists()) {
        let list = [];
        res.forEach((snap) => {
          const value = snap.val();
          list.push({username: value.username, id: value.id});
        })
        callbackMember(list);
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  sendFile = (sender, filename, content, room_id, time, callback) => {
    const file = {
      sender,
      filename,
      content: new Uint8Array(content),
    };
    // Broadcast the file to all connected clients
    const storageRef = Ref(this.storage, `${room_id}/${filename}`+` time:${time}`);
    uploadBytes(storageRef, file.content).then((url) => {
      callback()
    }).catch((e) => {
      console.log(e);
    })
  };

  getMediaFiles = async (room_id, callback, setIsLoading) => {
    try {
      const res = await listAll(Ref(this.storage, `${room_id}`));
      if (res.items.length < 1) return setIsLoading(() => false);
      let list = [];
      res.items.forEach( async (item) => {
        const url = await getDownloadURL(Ref(this.storage, item.fullPath));
        list.push({filename: item.name, downloadUrl: url})
        if (list.length == res.items.length) {
          setIsLoading(() => false);
          callback(list);
        }
      });
    } catch (e) {
      console.log("ERROR!", e);
    }
  }

  getFileCount = async (room_id) => {
    try {
      const res = await listAll(Ref(this.storage, `${room_id}`));
      return res.items.length;

    } catch(e) {
      console.log(e);
    }
  }

  deleteFiles = async (room_id) => {
    const res = await listAll(Ref(this.storage, `${room_id}`));
    if (res.items.length <= 0 ) return;
    res.items.forEach(async(item) => {
      await deleteObject(Ref(this.storage, item.fullPath));
    })
  } 

}



export default Firebase;
