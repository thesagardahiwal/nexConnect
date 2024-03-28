import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSocket } from '../contexts/SocketContext';
import { logout, logo, room, id } from '../assets/icons';
import SharedFiles from '../components/ShowCaser';
import { useFirebase } from '../firebase/FirebaseContext';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Groups3Icon from '@mui/icons-material/Groups3';
import { CircularProgress } from '@mui/material';

const LeftBar = ({width}) => {
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
        firebase.isOwnerLogout(roomId, username);
      } else {
        console.log("User Not Present!");
      }
    })
  };

  const recieveUsernameListener = useCallback(
    (data) => {
      const result = firebase.getCurrentUserDetails(roomId)
      result.then((res) => {
        res && setUsername((prev) => res);
      })
    }, [socket, username, firebase]
  );

  useEffect(() => {
    firebase.onAuthStateChanged( async (user) => {
      if (user) {
        const result = await firebase.getCurrentUserDetails(roomId)
        if (result) {
          setUsername(() => result);
        }
        socket.emit("call-members", { roomId: roomId});
        socket.emit("get-username", { id: socket.id });
      } else {
        navigator('/');
      }
    });
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("recieve-username", recieveUsernameListener);
      socket.emit("get-username", { id: socket.id });
    }
    

    return () => {
      socket.off("recieve-username", recieveUsernameListener);
    }

  }, [])
  return (
    <div className={`${ width ? `w-[${width}]`: "w-1/3"} bg-gradient-to-r from-purple-500 to-pink-500 h-full p-4`}>
      {/* Small session */}
      <div className={` ${width && "hidden"} w-full gap-2 h-[100px] flex text-white justify-center items-center text-2xl font-semibold`}>
        <img src={logo} width={50} alt="logo" />
        <p>NexConnect</p>
      </div>

      <div className="mb-4 bg-gradient-to-r w-full from-purple-400 to-pink-400 rounded-md p-2">
          {/* Show Join ID and Leave Group Button */}
          <div className='flex bg-gradient-to-r from-purple-500 to-pink-500 rounded-md p-2 gap-2'>
            <div className='font-semibold flex items-center gap-1 text-gray-100'><HomeMaxIcon />Room ID:</div>
            <div className='font-semibold text-white'>{roomId}</div>
          </div>

          <div className='flex gap-2 bg-violet-700 rounded-md p-1 items-center mt-2 w-full'>
            <img src={`https://avatar.iran.liara.run/public/boy?username=${username}`} height={30} width={30} alt="id" />
            <h1 className='font-semibold text-center text-gray-100'>
              {username ?
              <span className='font-semibold text-white'>@{username}</span>
              :
              <CircularProgress disableShrink size={20} />
              }
              </h1>
          </div>
          <div className='text-gray-500 mt-2 w-full flex items-center justify-end '>
            <button onClick={handleLogout} className='flex gap-1 w-fit rounded-md borde bg-white hover:text-red-500 hover:cursor-pointer transition-all p-1'>
              Logout
              <img src={logout} alt="logout" />
            </button>
          </div>
      </div>

      {/* Large session */}
      <div className='font-semibold w-full text-white'>
        <button className="rounded-md px-2 py-1 flex w-full justify-between items-center bg-slate-100"
          onClick={() => setShowFiles(!showFiles)}
          >
          <p className={`${!showFiles ? "text-slate-300" : "text-purple-500"}`}><PermMediaIcon/>  Files</p>
          <p className={`${!showFiles ? "text-pink-400" : "text-slate-300"}`}><Groups3Icon/> Members</p>
        </button>
      </div>

      <div className='h-1/2'>
        < SharedFiles showFiles={showFiles}/>
      </div>
    </div>
  );
};

export default LeftBar;
