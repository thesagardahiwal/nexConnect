import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import BackgroundLetterAvatars from "../components/Avatar.jsx";
import { useTheme } from '../contexts/ThemeContext.jsx';
import { Alert } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import { file } from '../assets/icons/index.js';

const ChatContainer = () => {
  const socket = useSocket();
  const firebase = useFirebase();
  const { roomId } = useParams();
  const navigate = useNavigate();
  const currentUser = firebase.getCurrentUser();
  const { theme } = useTheme();

  const [messages, setMessages] = useState([]);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [username, setUsername] = useState('');
  const [newMember, setNewMember] = useState('');
  const [kickoutMember, setKickoutMember] = useState('');
  const [logoutMember, setLogoutMember] = useState('');

  const chattingRef = useRef(null);

  const scrollToBottom = () => {
    const container = chattingRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  // Download handler improved with revoking object URLs if needed
  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // Fallback for media errors - replace with default icon/image
  const handleError = (id) => {
    const img = document.getElementById(id);
    if (img) {
      img.src = file;
      img.style.height = '100px';
      img.style.width = '100px';
    }
  };

  // Helper to detect media type for rendering icon/video/image
  const getMediaElement = (m, index) => {
    const lower = m.download.toLowerCase();
    if (lower.includes('pdf')) {
      return <PictureAsPdfIcon />;
    }
    if (lower.includes('txt') || lower.includes('csv')) {
      return <DescriptionIcon />;
    }
    if (lower.includes('mp4')) {
      return (
        <video
          src={m.download}
          playsInline
          className='h-56 object-contain w-52'
          muted
          height={200}
          width={200}
          autoPlay
          loop
          id={`id-${index}`}
          onError={() => handleError(`id-${index}`)}
        />
      );
    }
    return (
      <img
        id={`id-${index}`}
        onError={() => handleError(`id-${index}`)}
        src={m.download}
        className="rounded-md object-contain h-56 w-52"
        alt="media"
        width={300}
      />
    );
  };

  // Listeners
  const groupMessageListener = useCallback((data) => {
    setMessages((prev) => [...prev, data]);
  }, []);

  const mediaFileListener = useCallback((data) => {
    setMediaFiles((prev) => [...prev, data]);
  }, []);

  const newMemberListener = useCallback((data) => {
    if (!data?.username) return;

    setNewMember(data.username);
    setTimeout(() => setNewMember(''), 4000);

    firebase.onAuthStateChanged((user) => {
      if (user) {
        socket.emit('call-members', { roomId });
        socket.emit('get-username', { id: socket.id });
      } else {
        navigate('/');
      }
    });
  }, [firebase, navigate, roomId, socket]);

  const leaveGroupListener = useCallback(async () => {
    const exists = await firebase.checkRoomId(roomId);
    if (!exists) {
      const isMe = await firebase.isMeExist(roomId);
      if (isMe) navigate('/');
    }
  }, [firebase, navigate, roomId]);

  const kickoutListener = useCallback((data) => {
    if (!data?.username) return;

    setKickoutMember(data.username);
    setTimeout(() => setKickoutMember(''), 4000);

    // Remove listener on cleanup
    const callback = async (id) => {
      const isMe = await firebase.isMeExist(roomId, id);
      if (isMe) navigate('/');
    };

    const unsubscribe = firebase.onValueChange(roomId, callback);
    return unsubscribe; // Should return unsubscribe for cleanup in effect
  }, [firebase, navigate, roomId]);

  const memberLogoutListener = useCallback((user) => {
    if (!user) return;
    setLogoutMember(user);
    setTimeout(() => setLogoutMember(''), 4000);
  }, []);

  // Socket listeners setup
  useEffect(() => {
    if (!socket) return;

    socket.on('group-mess', groupMessageListener);
    socket.on('media-file', mediaFileListener);
    socket.on('member-joined', newMemberListener);
    socket.on('owner-logout', leaveGroupListener);
    socket.on('kickout', kickoutListener);
    socket.on('member-logout', memberLogoutListener);

    return () => {
      socket.off('group-mess', groupMessageListener);
      socket.off('media-file', mediaFileListener);
      socket.off('member-joined', newMemberListener);
      socket.off('owner-logout', leaveGroupListener);
      socket.off('kickout', kickoutListener);
      socket.off('member-logout', memberLogoutListener);
    };
  }, [
    socket,
    groupMessageListener,
    mediaFileListener,
    newMemberListener,
    leaveGroupListener,
    kickoutListener,
    memberLogoutListener,
  ]);

  // Scroll on new message
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial messages fetch
  useEffect(() => {
    let isMounted = true;
    firebase.getMessages(roomId, (msgs) => {
      if (isMounted) setMessages(msgs);
    });
    return () => {
      isMounted = false;
    };
  }, [firebase, roomId]);

  // Auth & username setup
  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate('/');
        return;
      }
      socket.emit('get-username', { id: socket.id });
      const userDetails = await firebase.getCurrentUserDetails(roomId);
      if (username !== userDetails) setUsername(userDetails);
    });

    return () => unsubscribe?.();
  }, [firebase, navigate, roomId, socket, username]);

  const renderSystemAlert = () => {
    if (newMember) {
      return (
        <Alert severity="success">
          New Member: <span className="username">{newMember}</span> joined successfully!
        </Alert>
      );
    }
    if (kickoutMember) {
      return (
        <Alert severity="info">
          Member Left: <span className="username">{kickoutMember}</span> was kicked out!
        </Alert>
      );
    }
    if (logoutMember) {
      return (
        <Alert severity="info">
          Member Left: <span className="username">{logoutMember}</span> left the room!
        </Alert>
      );
    }
    return null;
  };

  return (
    <div className={`${theme === 'light' ? 'light-rev' : 'dark'} h-[100vh] pb-[80px] sm:pb-0 lg:pt-10 w-full`}>
      <div
        className={`${
          newMember || kickoutMember || logoutMember ? 'flex' : 'hidden'
        } z-30 sm:justify-center mt-2 sm:w-fit absolute sm:left-1/2`}
      >
        {renderSystemAlert()}
      </div>

      <div
        className="main-container px-4 hide-scroll-bar scroll-smooth"
        ref={chattingRef}
        style={{ overflowY: 'auto', height: '100%' }}
      >
        {messages.map((m, i) => {
          const isUser = m.username === username || m.id === currentUser;
          const msgClass = isUser ? 'user' : 'member';
          const msgStyle = isUser ? 'user-msg' : 'member-msg';

          return (
            <div key={`msg-${i}`} className={msgClass}>
              <div>
                {m.download ? (
                  <div className={`overflow-hidden msg ${msgStyle}`}>
                    <div
                      className={`flex flex-col items-center bg-[#1e293b] hover:bg-[#334155] transition-all duration-200 rounded-lg p-2 gap-2 cursor-pointer`}
                      onClick={() => handleDownload(m.download, m.message)}
                    >
                      {getMediaElement(m, i)}
                      <p className="text-white text-sm break-words max-w-[200px] text-center">
                        {m.message}
                      </p>
                    </div>
                  </div>
                ) : (
                  <h1
                    className={`msg ${msgStyle}`}
                    style={{ minWidth: "40px" }}
                  >
                    {m.message}
                  </h1>
                )}
                <div
                  className={`time ${
                    isUser ? "justify-end" : "justify-start"
                  } flex items-center gap-2`}
                >
                  {!isUser && (
                    <>
                      <BackgroundLetterAvatars
                        username={m.username}
                        size="10px"
                      />
                      <p className="font-semibold">~ {m.username}</p>
                    </>
                  )}
                  <span>{m.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatContainer;
