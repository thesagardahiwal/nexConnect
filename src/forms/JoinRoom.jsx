import React, { useEffect, useState } from 'react';
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import { useSocket } from '../contexts/SocketContext.jsx';
import { loader } from "../assets/icons/index.js";
import DisplayMsg from '../hooks/DisplayMsg.jsx';
import JoinFullIcon from '@mui/icons-material/JoinFull';

function JoinGroup() {
  const socket = useSocket();
  const firebase = useFirebase();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [roomID, setRoomID] = useState('');
  const [message, setMessage] = useState('');

  const showMessage = (msg) => {
    setMessage(msg);
    setLoading(false);
  };

  const loginMember = async () => {
    try {
      const roomExists = await firebase.checkRoomId(roomID);
      if (!roomExists) return showMessage("Room does not exist!");

      const nameAvailable = await firebase.isUsernameAvailable(roomID, username);
      if (!nameAvailable) return showMessage("This username is already taken. Try another one.");

      const response = await firebase.login({ room_id: roomID, username, isOwner: false });
      if (!response) return showMessage("Room is not open or expired!");

      socket.emit("join-room", { roomId: roomID, username });
      setLoading(false);
    } catch (error) {
      showMessage("Something went wrong. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return showMessage("Please wait...");

    if (!socket) return showMessage("Internet issue. Please refresh.");
    if (roomID.trim().length !== 6) return showMessage("Room ID must be 6 characters.");
    if (username.trim().length < 3) return showMessage("Name must be at least 3 characters.");

    setLoading(true);
    loginMember();
  };

  useEffect(() => {
    if (message.length > 0) {
      const timeout = setTimeout(() => setMessage(''), 4000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center w-full justify-center mb-5'>
        {/* Input Fields */}
        <div className='w-full'>
          <label htmlFor='username' className='sr-only'>Username</label>
          <input
            id='username'
            type='text'
            className='rounded-md border bg-transparent text-slate-100 w-full p-3'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Enter your name'
            autoComplete="off"
            disabled={loading}
            required
          />

          <label htmlFor='roomID' className='sr-only'>Room ID</label>
          <input
            id='roomID'
            type='text'
            className='rounded-md border mt-2 bg-transparent text-slate-100 w-full p-3'
            value={roomID}
            onChange={e => setRoomID(e.target.value)}
            placeholder='Enter Room ID (6 characters)'
            autoComplete="off"
            maxLength={6}
            disabled={loading}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='rounded-md w-full border h-[50px] text-white flex justify-center items-center backdrop-blur-sm hover:bg-white/20 transition-all p-3'
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? (
            <div className='flex items-center gap-2'>
              <span>Joining...</span>
              <img src={loader} width={20} height={20} alt="loading spinner" />
            </div>
          ) : (
            <JoinFullIcon />
          )}
        </button>
      </form>

      {/* Error/Info Message */}
      {message && (
        <div className='absolute w-[90vw] top-10 flex justify-center'>
          <DisplayMsg message={message} setMessage={setMessage} />
        </div>
      )}
    </div>
  );
}

export default JoinGroup;
