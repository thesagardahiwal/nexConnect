import React, { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useParams } from 'react-router-dom';
import { logo } from "../assets/icons/index.js";
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import TemporaryDrawer from '../components/Drawer.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';

const TopBar = () => {
  const socket = useSocket();
  const { roomId } = useParams();
  const [username, setUsername] = useState('');
  const firebase = useFirebase();
  const { theme } = useTheme();

  const receiveUsernameListener = useCallback(async () => {
    try {
      const result = await firebase.getCurrentUserDetails(roomId);
      if (result?.username) setUsername(result.username);
    } catch (error) {
      console.error('Failed to get user details:', error);
    }
  }, [firebase, roomId]);

  useEffect(() => {
    if (!socket) return;

    socket.on("recieve-username", receiveUsernameListener);
    socket.emit("get-username", { id: socket.id });

    return () => {
      socket.off("recieve-username", receiveUsernameListener);
    };
  }, [socket, receiveUsernameListener]);

  return (
    <div className={`w-full h-[70px] flex items-center sticky top-0 ${theme === 'light' ? "extralight text-black" : "darklight text-white"} drop-shadow-xl`}>
      <div className='flex p-4 w-full gap-2 items-center justify-between'>
        <div className='text-2xl flex font-semibold items-center mr-2 gap-2 w-[30%]'>
          <img src={logo} width={50} alt="NexConnect logo" />
          <span>NexConnect</span>
        </div>

        <ul className='flex items-center gap-4'>
          <li>{username && <span className="font-medium">Hi, {username}</span>}</li>
          <li><TemporaryDrawer /></li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
