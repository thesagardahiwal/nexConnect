// src/pages/ChatPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import TopBar from './TopBar';
import ChatContainer from './ChatContainer';
import BottomBar from './BottonBar';
import LeftBar from './LeftBar';

function ChatPage() {


  const myElementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);
  const handleResize = () => {
    if (myElementRef.current) {
      setElementWidth(myElementRef.current.offsetWidth);
    }
  };



  useEffect(() => {

    handleResize();
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  

  return (
    <div className='h-screen bg-black overflow-hidden'
      ref={myElementRef}
    >
      {elementWidth > 800 ?
      (
      <div className='flex h-full w-full'>
          <LeftBar/>
          <div className='w-full h-full'>
            <ChatContainer width={elementWidth}  />
            <BottomBar width={elementWidth} />
          </div>
      </div>

      )
      : 
      (
        <>
        <TopBar width={elementWidth}/>
        <ChatContainer width={elementWidth} />
        <BottomBar width={elementWidth}/>
        </>
      )}
      
      
    </div>
  );
}

export default ChatPage;
