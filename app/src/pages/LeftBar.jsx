import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSocket } from '../contexts/SocketContext';
import { logout, logo, loader } from '../assets/icons';
import SharedFiles from '../components/ShowCaser';
import { useFirebase } from '../firebase/FirebaseContext';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Groups3Icon from '@mui/icons-material/Groups3';
import { CircularProgress } from '@mui/material';
import BackgroundLetterAvatars from "../components/Avatar";
import ThemeToggleButton from '../components/ThemeToggleButton';
import { useTheme } from '../contexts/ThemeContext';
import Switch from '@mui/material/Switch';
import LogoutIcon from '@mui/icons-material/Logout';

const LeftBar = ({width, setIsChatWithAI}) => {
  const { roomId } = useParams();
  const socket = useSocket();
  const [ username, setUsername ] = useState('');
  const [ showFiles, setShowFiles ] = useState(false);
  const [ roomOwner, setRoomOwner ] = useState('');
  const firebase = useFirebase();
  const navigator = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [ isLoading, setIsloading ] = useState(false);
  const [ checked, setChecked ] = useState(false);
  const [ isOwner, setIsOwner ] = useState(null);


  const handleLogout = async () => {
    if (isLoading) return;
    setIsloading(true);
    await firebase.isOwnerLogout(roomId);
    setIsloading(false);
  };

  const recieveUsernameListener = useCallback(
    (data) => {
      const result = firebase.getCurrentUserDetails(roomId);
      result.then((res) => {
        res && setUsername((prev) => res);
      });
      firebase.isOwner(roomId).then((res) => {
        setIsOwner(() => res);
      })
    }, [socket, username, firebase]
  );

  const handleParticipants = async () => {
    const callback = (result) => {
      setChecked(() => result);
    }
    await firebase.allowParticipants(roomId, callback, checked);
  }

  useEffect(() => {
    firebase.onAuthStateChanged( async (user) => {
      if (user) {
        setTimeout(() => {
          firebase.isMeExist(roomId, user.uid)
        }, [10000]);
        const snapDoc = await firebase.getRoomOwner(roomId);
        const snapShot = await firebase.getCurrentUserDetails(roomId);
        if (snapDoc || snapShot) {
          setRoomOwner(() => snapDoc);
          setUsername(() => snapShot);
        };
        firebase.isOwner(roomId).then((res) => {
          setIsOwner(() => res)
        })
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
      <div className={` ${width && "hidden"} w-full gap-2 h-[100px] flex justify-center items-center text-2xl font-semibold`}>
        <img src={logo} width={50} alt="logo" />
        <p>NexConnect</p>
      </div>

      <div className={`mb-4 w-full ${theme == 'light' ? "extralight": "darklight"}  rounded-md p-2`}>
          {/* Show Join ID and Leave Group Button */}
          <div className={`flex ${theme == 'light' ? "light": "dark"} items-center justify-between rounded-md p-2 gap-2`}>
            <div className='font-semibold flex items-center gap-1'><HomeMaxIcon />Room ID:</div>
            <div className='font-semibold'>{roomId}</div>
          </div>

          <div className={`flex gap-2 ${theme == 'light' ? "light-item": "dark-item "} rounded-md p-1 items-center mt-2 w-full`}>
            <BackgroundLetterAvatars username={roomOwner} size='30px'/>
            <h1 className='font-semibold text-center'>
              {roomOwner ?
              <span className='font-semibold'>Host: @{roomOwner}</span>
              :
              <CircularProgress disableShrink size={20} />
              }
              </h1>
          </div>
        {isOwner &&
          <div className={`flex font-medium justify-between ${theme == 'light' ? "light-item-4" : "dark-item-4"} rounded-md p-1 items-center mt-2 w-full`}>
            Joining {checked ? "Allowed" : "Denied"}
            <Switch checked={checked}
              onChange={handleParticipants}
              inputProps={{ 'aria-label': 'controlled' }} />
          </div>
        }
          
          <div className='text-white mt-2 w-full flex items-center gap-1 justify-end '>
            <ThemeToggleButton />
              <button onClick={handleLogout} className='flex gap-1 w-fit rounded-md borde bg-red-500 hover:cursor-pointer font-semibold transition-all p-1'>
                {isLoading ? 
                  <>
                  {isOwner ? "Destroying..." : "Logging out..."}
                  <img src={loader} alt="loading" height={25} width={25} />
                  </>
                  : 
                  <>
                    {isOwner ? "Destroy Room" : "Logout"}
                    <LogoutIcon />
                  </>}
                
              </button>
          </div>
      </div>

      {/* Large session */}
      <div className='font-semibold w-full text-white'>
        <button className={`rounded-md px-2 py-1 flex w-full justify-between items-center ${theme == 'light' ? "light-item-2": "dark-item-2"}`}
          onClick={() => setShowFiles(!showFiles)}
          >
          <p className={`${!showFiles ? "text-white" : "gr-text"}`}><PermMediaIcon style={{color:"purple"}}/> Files</p>
          <p className={`${!showFiles ? "gr-text" : "text-white"}`}><Groups3Icon style={{color:"purple"}}/> Members</p>
        </button>
      </div>

      <div className='h-1/2'>
        < SharedFiles showFiles={showFiles} isOwner={isOwner} roomOwner={roomOwner} setIsChatWithAI={setIsChatWithAI}/>
      </div>
    </div>
  );
};

export default LeftBar;
