import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import BackgroundLetterAvatars from "../components/Avatar.jsx";
import { useTheme } from '../contexts/ThemeContext.jsx';
import { Alert } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { download } from '../assets/icons/index.js';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

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
          setTimeout( async () => {
            await firebase.isMeExist(roomId, user.uid);
          }, [5000])
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
      const { online } = data;
      const isExist = await firebase.checkRoomId(roomId);
      if (!online) {
        if (isExist) {
          await firebase.logout(roomId);
        }
        navigate('/');
      } else {
        firebase.participantLogout();
        navigate('/');
      }
    },
    [socket, firebase],
  );

  const kickoutListner = useCallback(async (data) => {
    const { username } = data;
    setkickoutMember(() => username || '');
    setTimeout(() => setkickoutMember(() => ''), 4000);
    await firebase.onAuthStateChanged((user) => {
      if (user) {
          firebase.isMeExist(roomId, user.uid);
      } else {
        const callback = () => {
          navigate('/');
        }
        firebase.onValueChange(roomId, callback);
      }
    });
  }, [messages, newMember]);



  useEffect(() => {
    if(socket) {
      socket.on("group-mess", groupMessageListner);
      socket.on("media-file", mediaFileListner);
      socket.on("member-joined", newMemberListener);
      socket.on("owner-logout", leaveGroupListener);
      socket.on("kickout", kickoutListner);
    }
    
    
    return () => {
      socket.off("group-mess", groupMessageListner);
      socket.off("media-file", mediaFileListner);
      socket.off("member-joined", newMemberListener);
      socket.off("kickout", kickoutListner);
    }

  }, [ firebase, socket, mediaFileListner, groupMessageListner, newMemberListener, leaveGroupListener]);

  useEffect (() => {
    const container = chatting.current;
    if(container) {
      container.scrollTop = container.scrollHeight;
    }

    if (!messages.length) {
      firebase.getMessages(roomId, setMessages);
    }

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


  return (
    <div className={`${theme == 'light' ? "light-rev": "dark"} h-[90vh] pb-[80px] sm:pb-0 w-full`}>
      <div className={`${newMember || kickoutMember ? "flex" : "hidden"} z-30 sm:justify-center mt-2 sm:w-fit absolute sm:left-1/2`}>
        {newMember ? 
        <>
          {newMember && <Alert severity="success">New Member: <span className='username'>{newMember}</span> is Joined successfully!</Alert>}
        </>
        : kickoutMember &&
        <>
          {kickoutMember && <Alert severity="info">Member Left: <span className='username'>{kickoutMember}</span> is Left from room successfully!</Alert>}
        </>}
        
      </div>

      <div 
        className="main-container px-4 hide-scrool-bar scroll-smooth"
        ref={chatting} style={{overflowY:"auto", height: "100%"} }>
        {/* Show chats */}
        
        {/*  MESSAGE UI */}
        {messages.map((m, i) => (
          <div key={`index${i+1}`} className={`${m.username === username || m.id === currentUser ? "user" : "member"}`}>
            <div className='max-w-[80%]'>
              
              {m.download ?
              <div className={`msg ${m.username === username || m.id === currentUser? "user-msg" : "member-msg"} overflow-hidden`}>
                <div>
                  <div className={`flex ${m.download.includes("pdf") ? "justify-start" : "justify-center"} items-center`} onClick={() => handleDownload(m.download, m.message)}>
                    {m.download.includes("pdf") ?
                      <PictureAsPdfIcon />
                      :
                      <img src={m.download} className='rounded-md' alt="png" width={300} height={30} />
                    }
                  </div>
                  <h1 className='text-white font-medium'>
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
