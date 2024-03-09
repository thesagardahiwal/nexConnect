import React from 'react';
import { useSocket } from '../socket/SocketContext';
import { logout } from "../assets/icons/index.js";
import { useNavigate, useParams } from 'react-router-dom';
import { logo } from "../assets/icons/index.js";

const TopBar = ({width}) => {
  const socket = useSocket();
  const { roomId } = useParams();
  const navigator = useNavigate();
  const handleLogout = () => {
    if (socket) {
      socket.emit("logout", { Id: socket.id, roomId: roomId});
    } else {
      navigator('/');
    }
  };

  
  return (
    <div className="w-full h-[70px] flex sticky top-0 bg-gradient-to-r from-pink-400 to-indigo-400">
      {/* Show room ID */}
      <div className='flex p-4 w-full items-center justify-between'>
        <div className='text-xl flex items-center gap-2 w-[30%] text-white'>
          <img src={logo} width={50} alt="" />
          <span>NexConnect</span>
        </div>
        <div className='w-[70%] flex items-center justify-end'>
          <ul className='flex items-center gap-5'>
            
            {width > 440 && <li className='text-sm text-white gap-2 flex'>ID: <span className='text-slate-700'>{socket?.id}</span></li>}
            
            <li className='text-red-600 flex font-semibold bg-gray-200 rounded-lg p-1'>
                <img src={logout} width={25} alt="logout" onClick={handleLogout}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
