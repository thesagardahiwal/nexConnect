import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext';
import { useSocket } from '../contexts/SocketContext.jsx';
import { loader } from "../assets/icons/index.js";
import Diversity3Icon from '@mui/icons-material/Diversity3';

function CreateGroup() {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const socket = useSocket();
  const [loading, setLoading] = useState(false);
  const [ username, setUsername ] = useState('');

  const handleGenerateRoom = (e) => {
    e.preventDefault();
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

      <form onSubmit={e => handleGenerateRoom(e)} className='flex flex-col items-center w-full justify-center'>
        {/* Input Field */}
        <div className='flex-col justify-center w-full'>
          <input
            type="text"
            className='rounded-md border text-white w-full bg-gradient-to-r from-sky-800 to-indigo-800 p-3'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Enter your name'
          />

        </div>

        {/* Submit Button Field */}
        <div className='w-full'>
          <button
            type='submit'
            onClick={() => setLoading(true)}
            className='rounded-md border w-full h-[50px] overflow-hidden text-white flex justify-center items-center bg-green-500 p-3 my-1'>
            <span>
              {loading ? <img src={loader} width={23} alt="loading" /> : <Diversity3Icon /> }
            </span>
          </button>
        </div>

      </form>

    </div>
  )
}

export default CreateGroup