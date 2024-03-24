import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSocket } from '../socket/SocketContext';
import { logout, logo, room, id } from '../assets/icons';
import SharedFiles from '../components/SharedFiles';
import { useFirebase } from '../firebase/FirebaseContext';

const LeftBar = () => {
  const { roomId } = useParams();
  const socket = useSocket();
  const [ username, setUsername ] = useState('');
  const [ showFiles, setShowFiles ] = useState(false);
  const firebase = useFirebase();

  const navigator = useNavigate();

  const handleLogout = async () => {
    firebase.onAuthStateChanged((user) => {
      if (user) {
        console.log("User Present!");
        firebase.isOwnerLogout(roomId);
      } else {
        console.log("User Not Present!");
      }
    })
  };

  const recieveUsernameListener = useCallback(
    (data) => {
      firebase.getCurrentUserDetails(roomId)
      .then((result) => {
        setUsername(result?.username);
      })
    }, [socket, username, firebase]
  );

  useEffect(() => {
    firebase.onAuthStateChanged((user) => {
      if (user) {
        firebase.getCurrentUserDetails(roomId)
        .then((result) => {
          setUsername((prev) => result?.username);
        });
        socket.emit("call-members", { roomId: roomId});
        socket.emit("get-username", { id: socket.id });
      } else {
        navigator('/');
      }
    });
  }, []);

  useEffect(() => {
    socket.on("recieve-username", recieveUsernameListener);
    socket.emit("get-username", { id: socket.id });
    

    return () => {
      socket.off("recieve-username", recieveUsernameListener);
    }

  }, [])
  return (
    <div className="w-1/3 bg-gradient-to-r from-purple-500 to-pink-500 h-screen p-4">
      {/* Small session */}
      <div className='w-full gap-2 h-[100px] flex text-white justify-center items-center text-2xl font-semibold'>
        <img src={logo} width={50} alt="logo" />
        <p>NexConnect</p>
      </div>

      <div className="mb-4 bg-gradient-to-r w-full from-purple-400 to-pink-400 rounded-md p-2">
          {/* Show Join ID and Leave Group Button */}
          <div className='flex gap-2'>
            <div className='font-semibold flex items-center gap-1 text-gray-100'><img src={room} width={25} alt="room" /> Room ID:</div>
            <div className='font-semibold text-white'>{roomId}</div>
          </div>

          <div className='flex gap-2 mt-2'>
            <img src={id} width={25} alt="id" />
            <h1 className='font-semibold text-gray-100'>Username: @<span className='font-semibold text-white'>{username}</span></h1>
          </div>
          <div className='text-gray-500 mt-2 w-full flex items-center justify-center '>
            <button onClick={handleLogout} className='flex gap-1 w-fit rounded-md borde bg-white hover:bg-gradient-to-r from-red-400 to-red-500 hover:text-white hover:cursor-pointer transition-all p-1'>
              Logout
              <img src={logout} alt="logout" />
            </button>
          </div>
      </div>

      {/* Large session */}
      <div className='font-semibold w-full text-white'>
        <button className={`rounded-md px-3 py-1 flex w-full justify-between items-center bg-gradient-to-r ${showFiles ? 'from-violet-400 to-pink-500' :'from-purple-500 to-pink-300' }  w-full mx-1`}
          onClick={() => setShowFiles(!showFiles)}
          >
          <p>Files</p>
          <p>Members</p>
        </button>
      </div>
        < SharedFiles showFiles={showFiles}/>
    </div>
  );
};

export default LeftBar;
