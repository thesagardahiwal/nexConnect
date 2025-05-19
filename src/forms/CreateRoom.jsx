import React, { useState } from 'react';
import { useFirebase } from '../firebase/FirebaseContext';
import { useSocket } from '../contexts/SocketContext.jsx';
import { loader } from "../assets/icons/index.js";
import Diversity3Icon from '@mui/icons-material/Diversity3';

function CreateGroup() {
  const firebase = useFirebase();
  const socket = useSocket();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

  const handleGenerateRoom = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (username.trim().length < 3) {
      alert("Name should be at least 3 characters long.");
      return;
    }

    if (!socket) {
      alert("Socket connection not available!");
      return;
    }

    setLoading(true);
    const generatedRoomID = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      const roomAvailable = await isRoomAvailable(generatedRoomID);
      if (roomAvailable) {
        socket.emit("create-room", {
          id: generatedRoomID,
          username,
          userId: firebase.getCurrentUser
        });
      } else {
        alert("Failed to create room. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const isRoomAvailable = async (room_id) => {
    try {
      const exists = await firebase.checkRoomId(room_id);
      if (!exists) {
        await firebase.login({ room_id, username, isOwner: true });
        return true;
      }
      return false;
    } catch (error) {
      console.error("Room check failed:", error);
      throw error;
    }
  };

  return (
    <div>
      <form onSubmit={handleGenerateRoom} className='flex flex-col gap-4 items-center w-full justify-center mb-5'>

        <div className='w-full'>
          <label htmlFor='username' className='sr-only'>Your Name</label>
          <input
            id="username"
            type="text"
            className='rounded-md border bg-transparent text-slate-100 w-full p-3'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Enter your name'
            disabled={loading}
            required
            aria-required="true"
            minLength={3}
          />
        </div>

        <div className='w-full'>
          <button
            type='submit'
            className='rounded-md border w-full h-[50px] text-white flex justify-center items-center backdrop-blur-sm hover:bg-white/20 transition-all p-3'
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <div className='flex items-center gap-2'>
                <span>Creating...</span>
                <img src={loader} width={23} alt="loading" />
              </div>
            ) : (
              <Diversity3Icon />
            )}
          </button>
        </div>

      </form>
    </div>
  );
}

export default CreateGroup;
