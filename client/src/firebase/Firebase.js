// src/firebase/Firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';

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
    const analytics = getAnalytics(app);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }

  login = async (username) => {
    await signInAnonymously(this.auth);
    await setDoc(doc(this.db, 'users', username), { online: true });
  };

  logout = async (username) => {
    try {
        await signOut(this.auth);
        await deleteDoc(doc(this.db, 'users', username), { online: false });
        console.log(`User ${username} logged out successfully.`);
      } catch (error) {
        console.error('Logout error:', error);
      }
  };

  checkUsername = async (username) => {
    const docRef = doc(this.db, 'users', username);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  };

  onAuthStateChanged = (callback) => {
    onAuthStateChanged(this.auth, callback);
  };

  sendMessage = (sender, text) => {
    const message = {
      sender,
      text,
    };

    // Broadcast the message to all connected clients
    this.db.collection('messages').add(message);
  };

  onMessageReceived = (callback) => {
    const unsubscribe = this.db.collection('messages').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const message = change.doc.data();
          callback(message);
        }
      });
    });

    return unsubscribe;
  };

  sendFile = (sender, filename, content) => {
    const file = {
      sender,
      filename,
      content: new Uint8Array(content),
    };

    // Broadcast the file to all connected clients
    this.db.collection('files').add(file);
  };

  createRoom = (creator, roomID) => {
    // Create the room on the server
    const roomRef = doc(this.db, 'rooms', roomID);
    setDoc(roomRef, {
      creator,
      participants: [creator],
    });
  };

  joinRoom = (participant, roomID) => {
    // Join the room on the server
    const roomRef = this.db.collection('rooms').doc(roomID);
    roomRef.update({
      participants: FieldValue.arrayUnion(participant),
    });
  };
}

export default Firebase;
