import React, { useEffect, useState } from 'react'
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import { useSocket } from '../contexts/SocketContext.jsx';
import { loader } from "../assets/icons/index.js";
import DisplayMsg from '../hooks/DisplayMsg.jsx';
import JoinFullIcon from '@mui/icons-material/JoinFull';

function JoinGroup() {
  const socket = useSocket();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [roomID, setRoomID] = useState('');
  const [message, setMessage] = useState('');
  const firebase = useFirebase();

  const loginMember = async () => {

    const isRoomExist = await firebase.checkRoomId(roomID);
    if (!isRoomExist) return setMessage("Room Does not exist!");

    const isUsernameAvailable = await firebase.isUsernameAvailable(roomID, username);
    if (!isUsernameAvailable) return setMessage("This username is already exist, try some other usenames");

    const responce = await firebase.login({ room_id: roomID, username: username, isOwner: false })
    responce && socket.emit("join-room", { roomId: roomID, username: username });
    setLoading(() => false);

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(loading) return setMessage("Please wait for a moment!");
    setLoading(() => true);
    if (!socket) return setMessage("Internet Problem!, Please refresh it.");
    if (roomID.length != 6) return setMessage("Room ID does not exist!");
    if (username && username.length < 3) return setMessage("Name should be greather than 3 characters!");
    loginMember();

  }

  useEffect(() => {
    if (message.length > 2) {
      setLoading(() => false);
    }
  }, [message])

  return (
    <div className='w-full'>
      <form onSubmit={e => handleSubmit(e)} className='flex flex-col gap-3 items-center w-full justify-center mb-5'>
        {/* Input Field */}
        <div className='flex-col justify-center w-full'>
          <input
            type="text"
            className='rounded-md border bg-transparent text-slate-100 w-full p-3'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Enter your name'
          />

          <input
            type="text"
            className='rounded-md border my-1 bg-transparent text-slate-100 w-full p-3'
            value={roomID}
            onChange={e => setRoomID(e.target.value)}
            placeholder='Enter Room ID'
          />
        </div>

        {/* Submit Button Field */}
        <div className='w-full'>
          <button
            type='submit'
            className='rounded-md w-full border h-[50px] overflow-hidden text-white flex justify-center items-center backdrop-blur-sm hover:bg-white/20 transition-all p-3 my-1'>
            <span>
              {loading ? <div className='flex gap-2'>
                <h1>Joining...</h1>
                <img src={loader} width={23} alt="loading" />
              </div> : <JoinFullIcon />}
            </span>
          </button>
        </div>

      </form>

      <div className='absolute w-[90vw] top-10 justify-center'>
        {message.length > 2 && <DisplayMsg message={message} setMessage={setMessage} />}
      </div>

    </div>
  )
}

export default JoinGroup