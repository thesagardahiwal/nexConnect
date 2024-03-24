import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  deleteUser,
} from 'firebase/auth';
import { getFirestore, doc, arrayRemove, setDoc, getDoc, deleteDoc, collection, updateDoc, arrayUnion, addDoc, getDocs, where, query, deleteField } from 'firebase/firestore';
import { ref, get, child, push, onValue, getDatabase, remove } from 'firebase/database';

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
  }

  login = async (room_id, room_owner) => {
    await signInAnonymously(this.auth);
    const roomRef = doc(this.db, 'rooms', room_id)
    await setDoc(roomRef, { 
        room_owner,
        id: this.auth.currentUser?.uid,
        participants: [room_owner],
     });
    await setDoc(doc(this.db, `rooms/${room_id}/participants`, this.auth.currentUser.uid), {
    username: room_owner,
    });
    console.log(`User ${room_id} logged in successfully.`);
  };

  ownerLogout = async (room_id) => {
    try {
        await remove(ref(this.database, `${room_id}`)).then( async ()=>{
          await deleteDoc(doc(this.db, 'rooms', room_id)).then( async () => {
          await deleteUser(this.auth.currentUser).then(() => {
            console.log(`User ${room_id} logged out successfully.`);
            return true;
          })
          })
        })
      } catch (error) {
        console.error('Logout error:', error);
      }
  };

  checkRoomId = async (room_id) => {
    const docRef = doc(this.db, 'rooms', room_id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  };

  isOwnerLogout = async (room_id) => {
    const roomRef = doc(this.db, "rooms", room_id);
    const docSnap = await getDoc(roomRef);
    if(docSnap.exists() && docSnap.data().id === this.auth.currentUser?.uid) {
      this.ownerLogout(room_id);
    } else {
      this.participantLogout(room_id);
    }
  }

  addParticipant = async (room_id, participant) => {
    await signInAnonymously(this.auth);
    const roomRef = doc(this.db, "rooms", room_id);
    const snapDoc = await getDoc(roomRef);
    if(snapDoc.exists()) {
      await updateDoc(roomRef, {
        participants: arrayUnion(participant)
      });
      await setDoc(doc(this.db, `rooms/${room_id}/participants`, this.auth.currentUser.uid), {
        username: participant,
      });
      return true;
    }
    return false;
  }

  getCurrentUser = () => {
    const id = this.auth.currentUser?.uid;
    return id;
  }

  getCurrentUserDetails = async (room_id) => {
    const user = this.auth.currentUser?.uid;
    if (user) {
      const docRef = doc(this.db, `rooms/${room_id}/participants`, user.toString());
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) return docSnap.data();
      return '';
    }
    return '';
  }

  getParticipantName = async (room_id, userid) => {
      const docRef = doc(this.db, `rooms/${room_id}/participants`, userid.toString());
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) return docSnap.data().username;
      return '';
  }



  onAuthStateChanged = (callback) => {
    onAuthStateChanged(this.auth, callback);
  };

  participantLogout = async (room_id) => {
    const userid = this.auth.currentUser?.uid;
    const docRef = doc(this.db, `rooms/${room_id}/participants`, userid.toString());
    const roomRef = doc(this.db, "rooms", room_id);
    const snapDoc = await getDoc(roomRef);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
      await deleteDoc(docRef).then( async (data) => {
        if (snapDoc.exists()) {
          await updateDoc(roomRef, {
            participants: arrayRemove(docSnap.data().username)
          });
        }
        await deleteUser(this.auth.currentUser).then(() => {
          console.log("Participant Logged Out!");
        })
        .catch((e) => {
          console.log("Internet Connection Problem!", e);
        })
      })
      .catch((e) => {
        console.log(e);
      })
    }
  }
  
  

  sendMessage = ({message, id, roomId}) => {
      const promise = this.getParticipantName(roomId, id)
      promise.then( async (username) => {
        const messages = {
          message,
          id,
          username
        };
        // Broadcast the message to all connected clients
        await push(child(ref(this.database), roomId), messages);
      })

  };
  
  getMessages = (room_id, setMessages) => {
    get(child(ref(this.database), room_id)).then((snap) => {
      if(snap.exists()) {
        snap.forEach((doc) => {
          setMessages((prev) => [...prev, doc.val()])
        })
      }
    })
  };

  getMembers = async (room_id) => {
    try {
      const memberRef = doc(this.db, "rooms", room_id);
      const snapDoc = await getDoc(memberRef);
      if (snapDoc.exists()) {
        const result = await snapDoc.data().participants;
        return result;
      }
      return [];
      
    } catch (error) {
      console.log(error);
    }
  }

  sendFile = (sender, filename, content) => {
    const file = {
      sender,
      filename,
      content: new Uint8Array(content),
    };

    // Broadcast the file to all connected clients
    this.db.collection('files').add(file);
  };
  
}

export default Firebase;
