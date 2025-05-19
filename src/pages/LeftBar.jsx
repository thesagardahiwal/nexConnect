import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSocket } from '../contexts/SocketContext';
import { logo, loader } from '../assets/icons';
import SharedFiles from '../components/ShowCaser';
import { useFirebase } from '../firebase/FirebaseContext';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Groups3Icon from '@mui/icons-material/Groups3';
import { Skeleton, Switch } from '@mui/material';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { useTheme } from '../contexts/ThemeContext';
import LogoutIcon from '@mui/icons-material/Logout';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const LeftBar = ({ width, setIsChatWithAI }) => {
  const { roomId } = useParams();
  const socket = useSocket();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [username, setUsername] = useState('');
  const [showFiles, setShowFiles] = useState(false);
  const [roomOwner, setRoomOwner] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isOwner, setIsOwner] = useState(null);

  const handleLogout = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const res = await firebase.isOwnerLogout(roomId);
      if (res) {
        socket.emit('owner-logout', { roomId });
      } else {
        socket.emit('logout', { username, roomId });
        navigate('/');
      }
    } finally {
      setIsLoading(false);
    }
  }, [firebase, isLoading, navigate, roomId, socket, username]);

  const receiveUsernameListener = useCallback(async () => {
    const userDetails = await firebase.getCurrentUserDetails(roomId);
    if (userDetails) setUsername(userDetails);

    const ownerStatus = await firebase.isOwner(roomId);
    setIsOwner(ownerStatus);
  }, [firebase, roomId]);

  const handleParticipantsToggle = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  const ownerLogoutListener = useCallback(async (data) => {
    if (!data) return;
    const callback = async (id) => {
      await firebase.isMeExist(roomId, id);
    };
    await firebase.onValueChange(roomId, callback);
  }, [firebase, roomId]);

  useEffect(() => {
    const unsubscribeAuth = firebase.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate('/');
        return;
      }

      const snapDoc = await firebase.getRoomOwner(roomId);
      const snapShot = await firebase.getCurrentUserDetails(roomId);

      if (snapDoc) setRoomOwner(snapDoc);
      if (snapShot) setUsername(snapShot);

      const ownerStatus = await firebase.isOwner(roomId);
      setIsOwner(ownerStatus);

      socket.emit('call-members', { roomId });
      socket.emit('get-username', { id: socket.id });
    });

    return () => {
      unsubscribeAuth && unsubscribeAuth();
    };
  }, [firebase, navigate, roomId, socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on('recieve-username', receiveUsernameListener);
    socket.on('owner-logout', ownerLogoutListener);

    socket.emit('get-username', { id: socket.id });

    return () => {
      socket.off('recieve-username', receiveUsernameListener);
      socket.off('owner-logout', ownerLogoutListener);
    };
  }, [receiveUsernameListener, ownerLogoutListener, socket]);

  // 🔄 Safe listener for room toggle without infinite loop
  useEffect(() => {
    firebase.allowParticipants(roomId, () => {}, checked);
  }, [checked, firebase, roomId]);

  return (
    <div
      className={`${width ? `w-[${width}]` : 'w-1/3'} ${
        theme === 'light' ? 'light' : 'dark'
      } h-full p-4`}
    >
      {!width && (
        <div className="bg-transparent w-full gap-2 h-fit mb-5 flex justify-center items-center text-2xl font-semibold">
          <img className="bg-transparent" src={logo} width={50} alt="logo" />
          <p>NexConnect</p>
        </div>
      )}

      <div className={`mb-4 w-full ${theme === 'light' ? 'extralight' : 'darklight'} rounded-md p-2`}>
        <div
          className={`flex ${theme === 'light' ? 'light' : 'dark'} items-center justify-between rounded-md p-2 gap-2`}
        >
          <div className="font-medium flex items-center gap-1">
            <HomeMaxIcon />
            Room ID:
          </div>
          <div className="font-semibold">{roomId}</div>
        </div>

        <div
          className={`flex gap-2 ${
            theme === 'light' ? 'light-item' : 'dark-item'
          } rounded-md p-2 items-center mt-2 w-full`}
        >
          <h1 className="font-semibold w-full">
            {roomOwner ? (
              <span className="font-medium flex items-center gap-1">
                <AdminPanelSettingsIcon />{' '}
                <span className="tracking-wider font-semibold">{roomOwner}</span>
              </span>
            ) : (
              <div className="flex w-full items-center px-1 gap-1">
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton animation="wave" style={{ width: '100%' }} height={40} />
              </div>
            )}
          </h1>
        </div>

        {isOwner && (
          <div
            className={`flex font-medium justify-between ${
              theme === 'light' ? 'light-item-4' : 'dark-item-4'
            } rounded-md p-1 items-center mt-2 w-full`}
          >
            <div className="flex items-center gap-1">
              {checked ? <LockOpenIcon /> : <LockIcon />}
              Room {checked ? 'opened' : 'closed'}
            </div>
            <div className="flex items-center">
              <span className={`relative flex h-3 right-3 w-3`}>
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                    checked ? 'bg-red-400' : 'bg-blue-400'
                  } opacity-75`}
                />
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${
                    checked ? 'bg-red-400' : 'bg-blue-400'
                  }`}
                />
              </span>
              <Switch
                checked={checked}
                onChange={handleParticipantsToggle}
                inputProps={{ 'aria-label': 'Toggle room lock' }}
              />
            </div>
          </div>
        )}

        <div className="text-white mt-2 w-full flex items-center gap-1 justify-end">
          <ThemeToggleButton />
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className="flex gap-1 w-fit rounded-md border bg-red-500 hover:cursor-pointer font-medium tracking-wider transition-all p-1 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                {isOwner ? 'Destroying...' : 'Logging out...'}
                <img src={loader} alt="loading" height={25} width={25} />
              </>
            ) : (
              <>
                {isOwner ? 'Destroy' : 'Logout'}
                <LogoutIcon />
              </>
            )}
          </button>
        </div>
      </div>

      <div className="font-semibold w-full text-white">
        <button
          className={`rounded-md px-2 py-1 flex w-full justify-between items-center ${
            theme === 'light' ? 'light-item-2' : 'dark-item-2'
          }`}
          onClick={() => setShowFiles((prev) => !prev)}
          aria-pressed={showFiles}
          aria-label="Toggle between files and members view"
        >
          <p className={`${!showFiles ? 'text-slate-400' : 'gr-text'}`}>
            <PermMediaIcon style={{ color: theme === 'light' ? 'black' : 'white' }} /> Files
          </p>
          <p className={`${showFiles ? 'text-slate-400' : 'gr-text'}`}>
            <Groups3Icon style={{ color: theme === 'light' ? 'black' : 'white' }} /> Members
          </p>
        </button>
      </div>

      <div className="h-1/2 w-full">
        <SharedFiles
          showFiles={showFiles}
          pushTo={navigate}
          isOwner={isOwner}
          roomOwner={roomOwner}
          setIsChatWithAI={setIsChatWithAI}
        />
      </div>
    </div>
  );
};

export default LeftBar;
