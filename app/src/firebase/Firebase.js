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
  apiKey: 'AIzaSyBOmHlPgUxBw4IShj4jv9X2K1kporIsBYc',
  authDomain: 'nexconnect-7361a.firebaseapp.com',
  projectId: 'nexconnect-7361a',
  storageBucket: 'nexconnect-7361a.appspot.com',
  messagingSenderId: '218877273069',
  appId: '1:218877273069:web:9a10ea19c75a94d000bde4',
  measurementId: "G-3DML8LLK1P"
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
      });
      await set(ref(this.database, `${room_id}/users/`+this.auth.currentUser.uid), {
        username: username,
        id: this.auth.currentUser.uid
      });
      return true;
    }
    if (snapDoc.exists()) {
      await signInAnonymously(this.auth);
      await set(ref(this.database, `${room_id}/users/`+this.auth.currentUser.uid), {
        username: username,
        id: this.auth.currentUser.uid
      });
      console.log(`User ${room_id} logged in successfully.`);
      return true;
    }
    return false;

  };

  logout = async ({room_id, isOwner, username}) => {
    try {
      if (!room_id && !username) return;
        const docSnap = await getDoc(doc(this.db, "rooms", room_id));
        const responce = await get(child(ref(this.database), `${room_id}/users/`+this.auth.currentUser.uid))
        if (!docSnap.exists() && !responce.exists()) {
          deleteUser(this.auth.currentUser);
          return;
        }
        await remove(ref(this.database, `${room_id}/users/`+this.auth.currentUser.uid))
        if (isOwner) {
          await deleteDoc(doc(this.db, "rooms", room_id));
        }
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


  isOwnerLogout = async (room_id, username) => {
    const roomRef = doc(this.db, "rooms", room_id);
    const docSnap = await getDoc(roomRef);
    if(docSnap.exists() && docSnap.data().id === this.auth.currentUser.uid) {
      this.logout({room_id: room_id, isOwner: true, username: username});
    } else if (docSnap.exists()) {
      this.logout({room_id: room_id, isOwner: false, username: username});
    }

  }

  isUsernameAvailable = async (room_id, username) => {
    const snapshot = await get(child(ref(this.database), `${room_id}/users/`));
    if (snapshot.exists()) {
      let result = true;
      snapshot.forEach((user) => {
        if (username === user.val().username) {
          result = false;
        }
      })
      return result
    }
  }

  getCurrentUser = () => {
    const id = this.auth.currentUser?.uid;
    return id;
  }

  getCurrentUserDetails = async (room_id) => {
    try {
      const result = await get(ref(this.database, `${room_id}/users/`+this.auth.currentUser.uid))
      if(!result.exists()) return '';
      return result.val().username;
    } catch (e) {
      console.log(e);
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
          list.push(value.username);
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
      console.log("Uploaded Successfully!");
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

}



export default Firebase;
