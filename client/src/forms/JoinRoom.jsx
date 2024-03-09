import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import { useSocket } from '../socket/SocketContext.jsx';
import { useNavigate } from 'react-router-dom';
import { loader, join } from "../assets/icons/index.js";
import DisplayMsg from '../hooks/DisplayMsg.jsx';

function JoinGroup() {
    const socket = useSocket();
    const [loading, setLoading] = useState(false);
    const [ name, setName ] = useState('');
    const [ roomID, setRoomID ] = useState('');
    const [ message, setMessage ] = useState('');
    const navigate = useNavigate();
    const firebase = useFirebase();

    const isUsernameTakenListener = useCallback(
      (data) => {
        const { id } = data;
        if ( socket.id == id) {
          setMessage("Name is already taken! Pleace try something differrent!");
        }
        setLoading(false);
      }, [message]
    );

    const isJoinedListener = useCallback(
      (data) => {
        const { Id, roomId } = data;
        if( Id == socket.id ) {
          setLoading(false);
          roomId.length == 6 ? navigate(`/chat/${roomId}`) : setMessage("Enter Room ID !"), setRoomID(''), setName('');
        } 
      }, []
    )


    useEffect(() => {
      socket.on("isUsernameTaken", isUsernameTakenListener);
      socket.on("isJoined", isJoinedListener);

      return () => {
        socket.off("isUsernameTaken", isUsernameTakenListener);
        socket.off("isJoined", isJoinedListener);
      }
    }, []);

    const isExist = async () => {
        if (socket && roomID.length == 6 && name) {
          const isExist = await firebase.checkUsername(roomID);
          if (isExist) {
            socket.emit("join-room", {roomId: roomID, username: name});
          } else {
            setMessage(`Room Does not exist at ID : ${roomID}`);
            setLoading(false);
          }
        } else {
          setMessage("Something went wrong !! Please refresh page ");
          setLoading(false);
        }
    
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        isExist();
      }

  return (
    <div>
      {message.length > 2 && <DisplayMsg message={message} setMessage={setMessage}/>}

            <form onSubmit={e => handleSubmit(e)} className='flex flex-col items-center w-full justify-center'>
              {/* Input Field */}
              <div className='flex-col justify-center w-full'>
                <input 
                    type="text" 
                    className='rounded-md border text-white w-full bg-gradient-to-r from-sky-800 to-indigo-800 p-3' 
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    placeholder='Enter your name'
                     />

                <input 
                    type="text" 
                    className='rounded-md my-1 text-white border w-full bg-gradient-to-r from-sky-800 to-indigo-800 p-3' 
                    value={roomID} 
                    onChange={e => setRoomID(e.target.value)} 
                    placeholder='Enter Room ID'
                     />
              </div>

              {/* Submit Button Field */}
              <div className='w-full'>
                <button 
                    type='submit' 
                    onClick={() => setLoading(true)} 
                    className='rounded-md border w-full h-[50px] overflow-hidden text-white flex justify-center items-center bg-green-500 p-3 my-1'>
                      <h1 className='font-blod text-white mx-2'>Enter in Room </h1>
                        <span>
                          {loading ? <img src={loader} width={23} alt="loading" /> : <img src={join} style={{width:"40px"}} alt='join' />}
                        </span>
                </button>
              </div>

            </form>
    </div>
  )
}

export default JoinGroup