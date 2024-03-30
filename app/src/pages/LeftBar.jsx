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
import BackgroundLetterAvatars from "../components/Avatar";
import ThemeToggleButton from '../components/ThemeToggleButton';
import { useTheme } from '../contexts/ThemeContext';

const LeftBar = ({width, setIsChatWithAI}) => {
  const { roomId } = useParams();
  const socket = useSocket();
  const [ username, setUsername ] = useState('');
  const [ showFiles, setShowFiles ] = useState(false);
  const firebase = useFirebase();
  const navigator = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = async () => {
    firebase.isOwnerLogout(roomId, username);
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
    <div className={`${ width ? `w-[${width}]`: "w-1/3"} ${theme == 'light' ? "light": "dark"} h-full p-4`}>
      {/* Small session */}
      <div className={` ${width && "hidden"} w-full gap-2 h-[100px] flex text-white justify-center items-center text-2xl font-semibold`}>
        <img src={logo} width={50} alt="logo" />
        <p>NexConnect</p>
      </div>

      <div className={`mb-4 w-full ${theme == 'light' ? "extralight": "darklight"}  rounded-md p-2`}>
          {/* Show Join ID and Leave Group Button */}
          <div className={`flex ${theme == 'light' ? "light": "dark"} rounded-md p-2 gap-2`}>
            <div className='font-semibold flex items-center gap-1 text-gray-100'><HomeMaxIcon />Room ID:</div>
            <div className='font-semibold text-white'>{roomId}</div>
          </div>

          <div className={`flex gap-2 ${theme == 'light' ? "light-item": "dark-item "} rounded-md p-1 items-center mt-2 w-full`}>
            <BackgroundLetterAvatars username={username} size='30px'/>
            <h1 className='font-semibold text-center'>
              {username ?
              <span className='font-semibold'>@{username}</span>
              :
              <CircularProgress disableShrink size={20} />
              }
              </h1>
          </div>
          <div className='text-gray-500 mt-2 w-full flex items-center gap-1 justify-end '>
            <ThemeToggleButton />
            <button onClick={handleLogout} className='flex gap-1 w-fit rounded-md borde bg-white hover:text-red-500 hover:cursor-pointer transition-all p-1'>
              Logout
              <img src={logout} alt="logout" />
            </button>
          </div>
      </div>

      {/* Large session */}
      <div className='font-semibold w-full text-white'>
        <button className={`rounded-md px-2 py-1 flex w-full justify-between items-center ${theme == 'light' ? "light-item-2": "dark-item-2"}`}
          onClick={() => setShowFiles(!showFiles)}
          >
          <p className={`${!showFiles ? "text-slate-300" : "text-white"}`}><PermMediaIcon/>  Files</p>
          <p className={`${!showFiles ? "text-white" : "text-slate-300"}`}><Groups3Icon/> Members</p>
        </button>
      </div>

      <div className='h-1/2'>
        < SharedFiles showFiles={showFiles} setIsChatWithAI={setIsChatWithAI}/>
      </div>
    </div>
  );
};

export default LeftBar;
