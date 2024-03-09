import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext';
import { useSocket } from '../socket/SocketContext';
import { loader, join } from "../assets/icons/index.js";

function CreateGroup() {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const socket = useSocket();

  const [loading, setLoading] = useState(false);
  const [ name, setName ] = useState('');


  const handleGenerateRoom = (e) => {
    e.preventDefault();
    const generatedRoomID = Math.floor(100000 + Math.random() * 900000).toString();
    if (socket && name) {
      if (isAvailable(generatedRoomID)) {
        socket.emit("create-room", { id: generatedRoomID, username: name });
        socket.on("room-chat", (data) => {
          const { roomId } = data
          navigate(`/chat/${roomId}`);
        })
      } else {
        console.log(generatedRoomID);
      }
    }
  };

  const isAvailable = async (roomNumber) => {
    try {
      const isInUse = await firebase.checkUsername(roomNumber);
      if (!isInUse) {
        await firebase.login(roomNumber);
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
      <h1 className='text-white font-semibold flex my-1 justify-start w-full'>
        Enter your name
      </h1>

      <form onSubmit={e => handleGenerateRoom(e)} className='flex flex-col items-center w-full justify-center'>
        {/* Input Field */}
        <div className='flex-col justify-center w-full'>
          <input
            type="text"
            className='rounded-md border text-white w-full bg-gradient-to-r from-sky-800 to-indigo-800 p-3'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Enter your name'
          />

        </div>

        {/* Submit Button Field */}
        <div className='w-full'>
          <button
            type='submit'
            onClick={() => setLoading(true)}
            className='rounded-md border w-full h-[50px] overflow-hidden text-white flex justify-center items-center bg-green-500 p-3 my-1'>
            <h1 className='font-blod text-white mx-2'>Create Room </h1>
            <span>
              {loading ? <img src={loader} width={23} alt="loading" /> : <img src={join} style={{ width: "40px" }} alt='join' />}
            </span>
          </button>
        </div>

      </form>
    </div>
  )
}

export default CreateGroup