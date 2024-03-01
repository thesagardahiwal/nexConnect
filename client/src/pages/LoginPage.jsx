// src/pages/LoginPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext';
import { useSocket } from '../socket/SocketContext';


localStorage.clear();

function LoginPage() {
  const [roomID, setRoomID] = useState('');
  const navigate = useNavigate();
  const firebase = useFirebase();
  const socket = useSocket();

  const handleCreatingButton = () => {
    // Check if the username is available
    //const userExists = await firebase.checkUsername(username);
    // if (!userExists) {
    //   // Log in the user
    //   firebase.login(username);
    //   localStorage.setItem('username', username);
    //   // Redirect to the main chat page
    //   navigate('/chat');
    // } else {
    //   await firebase.logout(username);
    //   localStorage.removeItem('username');
    //   alert('Username already in use. Please choose another.');
    // }
    const generatedRoomID = Math.floor(100000 + Math.random() * 900000).toString();
    if(socket) {
      console.log("Creating Room!")
      socket.emit("create-room", {id: generatedRoomID});
      socket.on("room-chat", (data) => {
        console.log(data);
        if (isAvailable(data[1])) {
          console.log("Available", data[1]);
          navigate(`/chat/${data[1]}`);
        }
      })
    }

    const isAvailable = async(roomNumber) => {
      const isInUse = await firebase.checkUsername(roomNumber);
      if (!isInUse) {
        await firebase.login(roomNumber);
        localStorage.setItem('room', roomNumber);
        return true;
      }
      return false;
    }
  };

  useEffect(()=>{
    if (socket) {
      console.log(socket.id);
      socket.on("message", (data) => {
        console.log("Recieved:", data);
      })
    }
  }, [socket]);

  const isExist = async () => {
    if (socket) {
      const isExist = await firebase.checkUsername(roomID);
      if (isExist) {
        socket.emit("join-room", roomID);
        navigate(`/chat/${roomID}`);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    isExist();
    
  }

  return (
    <div className='bg-slate-300 h-[100vh]'>
      <div>
        <h2>Home Page</h2>
      </div>
      <div>
        <button className='btn rounded-md border bg-red-500 p-1 m-1' onClick={handleCreatingButton}>Create Group</button> <br /><br />

        <form onSubmit={e => handleSubmit(e)}>
          <input type="text"  className='rounded-md border p-1' value={roomID} onChange={e => setRoomID(e.target.value)} placeholder='Enter Group Code'/>
          <button type='submit' className='btn rounded-md border bg-red-200 p-1 m-1'>Join</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
