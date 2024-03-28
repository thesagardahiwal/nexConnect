import React, { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { logo } from "../assets/icons/index.js";
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import TemporaryDrawer from '../components/Drawer.jsx';


const TopBar = ({width}) => {
  const socket = useSocket();
  const { roomId } = useParams();
  const [ username, setUsername ] = useState('');
  const firebase = useFirebase();


  const recieveUsernameListener = useCallback(
    (data) => {
      firebase.getCurrentUserDetails(roomId)
      .then((result) => {
        setUsername(result?.username);
      })
    }, [socket, username, firebase]
  );

  useEffect(() => {

    socket.on("recieve-username", recieveUsernameListener);
    socket.emit("get-username", { id: socket.id });
    
    return () => {
      socket.off("recieve-username", recieveUsernameListener);
    }

  }, [])


  
  return (
    <div className="w-full h-[70px] flex items-center sticky top-0 bg-gradient-to-r from-pink-400 to-indigo-400">
      {/* Show room ID */}
      <div className='flex p-4 w-full gap-2 items-center justify-between'>
        <div className='text-2xl flex font-semibold items-center mr-2 gap-2 w-[30%] text-white'>
          <img src={logo} width={50} alt="" />
          <span>NexConnect</span>
        </div>
        <ul className='flex items-center'>
          <li>
            <TemporaryDrawer />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
