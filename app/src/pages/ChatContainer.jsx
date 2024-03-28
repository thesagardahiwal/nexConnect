import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import Alerts from '../hooks/Alerts.jsx';

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
    firebase.onAuthStateChanged((user) => {
      if (user) {
        socket.emit("get-username", { id: socket.id });
      } else {
        navigate('/');
      }
    });
    

  }, [])


  return (
    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 sm:h-full h-[90vh] p-4 sm:px-5 pb-[80px] w-full">

      {newMember && <Alerts message={`${newMember} is joined`} type={"success"} /> }

      <div 
        className="main-container hide-scrool-bar"
        ref={chatting} style={{overflowY:"auto", height: "100%"} }>
        {/* Show chats */}
        
        {/*  MESSAGE UI */}
        {messages.map((m, i) => (
          <div key={`index${i+1}`} className={`flex my-2 ${m.id === currentUser ? "justify-end" : "justify-start"}`}>
            <div className='min-w-[3rem] max-w-1/3'>
              <h1 className={`flex w-full p-2 text-white my-1 ${m.id === currentUser ? "rounded-l-2xl rounded-tr-2xl justify-end bg-gradient-to-r from-cyan-500 to-blue-500" : "rounded-r-2xl rounded-tl-2xl justify-start bg-gradient-to-r from-pink-400 to-pink-400"} texl-xl`}>{m.message}</h1>
              <p className={`text-slate-200 flex w-full  ${m.id === currentUser ? "justify-end" : "justify-start" } text-[10px]`}>{m.time}</p>
            </div>
            
          </div>
        ))}

      </div>
    </div>
  );
};

export default ChatContainer;
