// src/pages/ChatPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext';
import { useSocket } from '../socket/SocketContext';
import TopBar from './TopBar';
import ChatContainer from './ChatContainer';
import BottomBar from './BottonBar';
import LeftBar from './LeftBar';

function ChatPage() {

  const socket = useSocket();
  const myElementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);
  const handleResize = () => {
    if (myElementRef.current) {
      setElementWidth(myElementRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on("member-joined", (data) => {
        console.log(data);
      });

      socket.on("memberCount", (data) => {
        console.log(data);
      });
    };

    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [socket]);
  return (
    <div className='h-screen bg-slate-200'
      ref={myElementRef}
    >
      {elementWidth > 650 ?
      (
      <div className='flex h-full w-full'>
          <LeftBar/>
          <div className='w-full'>
            <ChatContainer />
            <BottomBar />
          </div>
      </div>

      ) 
      : 
      (
        <>
        <TopBar />
        <ChatContainer />
        <BottomBar />  
        </>
      )}
      
      
    </div>
  );
}

export default ChatPage;
