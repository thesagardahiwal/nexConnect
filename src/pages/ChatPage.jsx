import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopBar from './TopBar';
import ChatContainer from './ChatContainer';
import BottomBar from './BottonBar';
import LeftBar from './LeftBar';
import AIChatContainer from './AIChatContainer';
import { useSocket } from '../contexts/SocketContext';
import { useFirebase } from '../firebase/FirebaseContext';

function ChatPage() {
  const containerRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);
  const [isChatWithAI, setIsChatWithAI] = useState(false);
  const socket = useSocket();
  const firebase = useFirebase();
  const navigate = useNavigate();

  // Resize handler (debounced via requestAnimationFrame)
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        window.requestAnimationFrame(() =>
          setElementWidth(containerRef.current.offsetWidth)
        );
      }
    };

    handleResize(); // Initial measurement
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Emit socket username request
  useEffect(() => {
    socket.emit('get-username', { id: socket.id });
  }, [socket]);

  // Auth check
  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged((user) => {
      if (!user) navigate('/');
    });

    return () => unsubscribe?.(); // Cleanup if `onAuthStateChanged` returns unsubscribe
  }, [firebase, navigate]);

  const isWideScreen = elementWidth > 910;

  return (
    <div ref={containerRef} className="h-screen bg-black overflow-hidden">
      <div className={isWideScreen ? 'flex h-full w-full' : 'h-screen'}>
        {isWideScreen ? (
          <LeftBar setIsChatWithAI={setIsChatWithAI} />
        ) : (
          <TopBar width={elementWidth} />
        )}
        <div className="w-full h-full">
          {isChatWithAI ? (
            <AIChatContainer />
          ) : (
            <ChatContainer width={elementWidth} />
          )}
          <BottomBar width={elementWidth} isChatWithAI={isChatWithAI} />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
