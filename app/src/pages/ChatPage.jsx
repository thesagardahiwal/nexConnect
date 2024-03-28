// src/pages/ChatPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import TopBar from './TopBar';
import ChatContainer from './ChatContainer';
import BottomBar from './BottonBar';
import LeftBar from './LeftBar';
import { useSocket } from '../contexts/SocketContext';

function ChatPage() {
  const myElementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);
  const socket = useSocket();
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
  

  return (
    <div className='h-screen bg-black overflow-hidden'
      ref={myElementRef}
    >
      <div className={`${elementWidth > 800 ? "flex h-full w-full" : 'h-screen'}`}>
          {elementWidth > 800 ? <LeftBar/> : <TopBar width={elementWidth}/>} 
          <div className='w-full h-full'>
            <ChatContainer width={elementWidth}  />
            <BottomBar width={elementWidth} />
          </div>
      </div>
    </div>
  );
}

export default ChatPage;
