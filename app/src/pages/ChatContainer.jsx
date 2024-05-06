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

const ChatContainer = ({width}) => {
  const socket = useSocket();
  const [ messages, setMessages ] = useState([]);
  const [ newMember, setNewMember ] = useState('');
  const [ mediaFiles, setMediaFiles ] = useState([]);
  const { roomId } = useParams();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const chatting = useRef();
  const currentUser = firebase.getCurrentUser();
  const [ username, setUsername ] = useState('');
  const { theme, toggleTheme } = useTheme();
  const [ kickoutMember, setkickoutMember ] = useState('');
  const [ logoutMember, setLogoutMember ] = useState('');

  const handleDownload = (data, filename) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = data;
    downloadLink.download = filename;
    downloadLink.click();
  }

  const groupMessageListner = useCallback(
    (data) => {
      setMessages((prev) => (
        [...prev, data]
      ));
    }, [messages]
  );

  const mediaFileListner = useCallback(
    (data) => {
      setMediaFiles((prev) => [...prev, data]);
    }, [mediaFiles, socket]
  )
  
  const newMemberListener = useCallback(
    (data) => {
      const { username } = data;
      setNewMember(username);
      firebase.onAuthStateChanged((user) => {
        if (user) {
          socket.emit("call-members", { roomId: roomId});
          socket.emit("get-username", { id: socket.id });
        } else {
          navigate('/');
        }
      });
      setTimeout(()=> setNewMember(''), 4000);
    }, [socket]
  );

  const leaveGroupListener = useCallback(
    async (data) => {
      if (!data) return;
      const isExist = await firebase.checkRoomId(roomId);
      if (!isExist) {
        const res = await firebase.isMeExist(roomId);
        if (res) navigate('/');
      }
    },
    [socket, firebase],
  );

  const kickoutListner = useCallback(async (data) => {
    if (!data) return;
    const { username } = data;
    setkickoutMember(() => username || '');
    setTimeout(() => setkickoutMember(() => ''), 4000);
    const callback = async (id) => {
      const res = await firebase.isMeExist(roomId, id);
      res && navigate('/');
    }
    firebase.onValueChange(roomId, callback);
  }, [messages, newMember]);

  const memberLogoutListner = useCallback((user) => {
    if (!user) return;
    setLogoutMember(() => user);
    setTimeout(() => setLogoutMember(() => ''), 4000);
}, [])

  useEffect(() => {
    if(socket) {
      socket.on("group-mess", groupMessageListner);
      socket.on("media-file", mediaFileListner);
      socket.on("member-joined", newMemberListener);
      socket.on("owner-logout", leaveGroupListener);
      socket.on("kickout", kickoutListner);
      socket.on("member-logout", memberLogoutListner);
    }
    
    
    return () => {
      socket.off("group-mess", groupMessageListner);
      socket.off("media-file", mediaFileListner);
      socket.off("member-joined", newMemberListener);
      socket.off("kickout", kickoutListner);
      socket.off("member-logout", memberLogoutListner);
    }

  }, [ firebase, socket, mediaFileListner, groupMessageListner, newMemberListener, leaveGroupListener]);

  useEffect (() => {
    const container = chatting.current;
    if(container) {
      container.scrollTop = container.scrollHeight;
    }
    firebase.getMessages(roomId, setMessages, messages);

  }, [messages]);



  useEffect (() => {
    firebase.onAuthStateChanged(async (user) => {
      if (user) {
        socket.emit("get-username", { id: socket.id });
        const responce = firebase.getCurrentUserDetails(roomId);
        responce.then((user) => {
          (username != user) && setUsername((prev) => user);
        })
      } else {
        navigate('/');
      }
    });
    

  }, [messages, leaveGroupListener, firebase, socket])

  const handleError = (id) => {
    const image = document.getElementById(id);
    if (!image) return;
    image.src = file
    image.style = "height: 100px; width:100px"
  }
  
  


  return (
    <div className={`${theme == 'light' ? "light-rev": "dark"} h-[90vh] pb-[80px] sm:pb-0 lg:pt-10 w-full`}>
      <div className={`${newMember || kickoutMember || logoutMember ? "flex" : "hidden"} z-30 sm:justify-center mt-2 sm:w-fit absolute sm:left-1/2`}>
        {newMember ? 
        <>
          {newMember && <Alert severity="success">New Member: <span className='username'>{newMember}</span> is Joined successfully!</Alert>}
        </>
        : kickoutMember ?
        <>
          {kickoutMember && <Alert severity="info">Member Left: <span className='username'>{kickoutMember}</span> is kicked out from room successfully!</Alert>}
        </>
        : logoutMember && 
        <>
          {logoutMember && <Alert severity="info">Member Left: <span className='username'>{logoutMember}</span> is Left from room successfully!</Alert>}
        </>}
        
      </div>

      <div 
        className="main-container px-4 hide-scrool-bar scroll-smooth"
        ref={chatting} style={{overflowY:"auto", height: "100%"} }>
        {/* Show chats */}
        
        {/*  MESSAGE UI */}
        {messages.map((m, i) => (
          <div key={`index${i+1}`} className={`${m.username === username || m.id === currentUser ? "user" : "member"}`}>
            <div className=''>
              {m.download ?
              <div className={`overflow-hidden msg ${m.username === username || m.id === currentUser? "user-msg" : "member-msg"}`}>
                <div className=''>
                  <div className={`flex overflow-hidden rounded-md ${m.download.includes("pdf") ? "justify-start" : "justify-center"} items-center max-h-60`} onClick={() => handleDownload(m.download, m.message)}>
                    {m.download.includes("pdf") ?
                      <PictureAsPdfIcon />
                      : m.download.includes("txt") || m.download.includes("csv") ?
                      <DescriptionIcon/>
                      : m.download.includes("mp4") ?
                      <video src={m.download} playsInline muted height={200} width={200} autoPlay loop id={`id-${i}`} onError={() => handleError(`id-${i}`)}></video>
                      :
                      <img id={`id-${i}`} onError={() => handleError(`id-${i}`)} src={m.download} className='rounded-md' alt="media-file" width={300} />
                    }
                  </div>
                  <h1 className='text-white drop-shadow-2xl font-medium'>
                    {m.message}
                  </h1>
                </div>
              </div>
              :
              <h1 className={`msg ${m.username === username || m.id === currentUser? "user-msg" : "member-msg"}`}
                style={{minWidth: "40px"}}
                >
                {m.message}
              </h1>
              }
              <div className={`time ${m.username === username || m.id === currentUser  ? "justify-end" : "justify-start" }`}>
                {m.username === username || m.id === currentUser ?
                  <>
                    {m.time}
                  </>
                  :
                  <>
                    <BackgroundLetterAvatars username={m.username} size='10px' />
                    <p className='font-semibold'>
                      ~ {m.username}
                    </p>
                    &nbsp; {m.time}
                  </>
                }
                </div>
            </div>
            
          </div>
        ))}

      </div>
    </div>
  );
};

export default ChatContainer;
