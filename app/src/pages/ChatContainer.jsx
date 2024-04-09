import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import Alerts from '../hooks/Alerts.jsx';
import BackgroundLetterAvatars from "../components/Avatar.jsx";
import { useTheme } from '../contexts/ThemeContext.jsx';

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
          setTimeout(async () => {
            await firebase.isMeExist(roomId, user.uid);
            
          }, [7000])
          socket.emit("call-members", { roomId: roomId});
          socket.emit("get-username", { id: socket.id });
        } else {
          navigate('/');
        }
      });
      setTimeout(()=> setNewMember(''), 3000);
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


  useEffect(() => {
    if(socket) {
      socket.on("group-mess", groupMessageListner);
      socket.on("media-file", mediaFileListner);
      socket.on("member-joined", newMemberListener);
      socket.on("owner-logout", leaveGroupListener);
    }


    return () => {
      socket.off("group-mess", groupMessageListner);
      socket.off("media-file", mediaFileListner);
      socket.off("member-joined", newMemberListener);
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
    <div className={`${theme == 'light' ? "light-rev": "dark"} h-[90vh] p-4 sm:px-5 pb-[80px] w-full`}>

      {newMember && <Alerts message={`${newMember} is joined`} type={"success"} /> }

      <div 
        className="main-container hide-scrool-bar"
        ref={chatting} style={{overflowY:"auto", height: "100%"} }>
        {/* Show chats */}
        
        {/*  MESSAGE UI */}
        {messages.map((m, i) => (
          <div key={`index${i+1}`} className={`flex my-2 ${m.username === username || m.id === currentUser ? "justify-end" : "justify-start"}`}>
            <div className='max-w-[80%]'>
              <h1 className={`flex p-2 w-fit text-white my-1 ${m.username === username || m.id === currentUser? "rounded-l-2xl rounded-tr-2xl bg-gradient-to-r from-cyan-500 to-blue-500" : "rounded-r-2xl rounded-tl-2xl bg-gradient-to-r mx-2 from-pink-400 to-pink-400"} justify-center  texl-xl`}
                style={{minWidth: "40px"}}
              >{m.message}</h1>
              <div className={`flex w-full 
               ${m.username === username || m.id === currentUser  ? "justify-end" : "justify-start" } 
               text-[10px] items-center gap-1`}>
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
