import React, { useState } from 'react'
import { useFirebase } from '../firebase/FirebaseContext';
import { useSocket } from '../contexts/SocketContext.jsx';
import { loader } from "../assets/icons/index.js";
import Diversity3Icon from '@mui/icons-material/Diversity3';

function CreateGroup() {
  const firebase = useFirebase();
  const socket = useSocket();
  const [loading, setLoading] = useState(false);
  const [ username, setUsername ] = useState('');

  const handleGenerateRoom = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(() => true);
    const generatedRoomID = Math.floor(100000 + Math.random() * 900000).toString();
    if (socket && (username.length > 2)) {
      if (isRoomAvailable(generatedRoomID)) {
        socket.emit("create-room", { id: generatedRoomID, username: username, userId: firebase.getCurrentUser });
        
      }
    }
  };

  const isRoomAvailable = async (room_id) => {
    try {
      const loggedIn = await firebase.checkRoomId(room_id);
      if (!loggedIn) {
        await firebase.login({room_id: room_id, username: username,isOwner: true});
        return true;
      }
      return false;
    } catch (error) {
      alert("Internet Connection is Bad!")
      console.log(error);
    }
  }

  return (
    <div>

      <form onSubmit={e => handleGenerateRoom(e)} className='flex flex-col gap-3 items-center w-full justify-center mb-5'>
        {/* Input Field */}
        <div className='flex-col justify-center w-full'>
          <input
            type="text"
            className='rounded-md border bg-transparent text-slate-100 w-full p-3'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Enter your name'
          />

        </div>

        {/* Submit Button Field */}
        <div className='w-full'>
          <button
            type='submit'
            className='rounded-md border w-full h-[50px] overflow-hidden text-white flex justify-center items-center backdrop-blur-sm hover:bg-white/20 transition-all p-3 my-1'>
            <span>
              {loading ?
                <div className='flex gap-2'>
                <h1>Creating...</h1>
                <img src={loader} width={23} alt="loading" />
                </div>  : <Diversity3Icon /> }
            </span>
          </button>
        </div>

      </form>

    </div>
  )
}

export default CreateGroup