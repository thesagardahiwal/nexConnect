// src/pages/ChatPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import TopBar from './TopBar';
import ChatContainer from './ChatContainer';
import BottomBar from './BottonBar';
import LeftBar from './LeftBar';
import { useSocket } from '../contexts/SocketContext';
import AIChatContainer from './AIChatContainer';
import { useFirebase } from '../firebase/FirebaseContext';
import { useNavigate, useParams } from 'react-router-dom';

function ChatPage() {
  const myElementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);
  const [ isChatWithAI, setIsChatWithAI ] = useState(false);
  const socket = useSocket();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const { roomId } = useParams();
  const handleResize = () => {
    if (myElementRef.current) {
      setElementWidth(myElementRef.current.offsetWidth);
    }
  };

  useEffect(() => {

    socket.emit("get-username", { id: socket.id });

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };


    

  }, []);
  
  useEffect (() => {
    firebase.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/');
      } 
    });
  }, [firebase, socket]);


  return (
    <div className='h-screen bg-black overflow-hidden'
      ref={myElementRef}
    >
      <div className={`${elementWidth > 910 ? "flex h-full w-full" : 'h-screen'}`}>
          {elementWidth > 910 ? <LeftBar setIsChatWithAI={setIsChatWithAI}/> : <TopBar width={elementWidth}/>} 
          <div className='w-full h-full'>
            { isChatWithAI ? <AIChatContainer /> : <ChatContainer width={elementWidth}  /> }
            <BottomBar width={elementWidth} isChatWithAI={isChatWithAI} />
          </div>
      </div>
    </div>
  );
}

export default ChatPage;
