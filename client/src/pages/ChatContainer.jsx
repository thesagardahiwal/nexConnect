import React, { useEffect, useRef, useState } from 'react';
import { useSocket } from '../socket/SocketContext';
import GroupPage from './GroupPage.jsx';
import { useParams } from 'react-router-dom';

const ChatContainer = ({width}) => {
  const socket = useSocket();
  const [ messages, setMessages ] = useState([]);
  const chatting = useRef();
  const [showSlider, setShowSlider] = useState(false);
  const [holdTimeout, setHoldTimeout] = useState(null);
  const roomID = useParams();
  const [ mediaFiles, setMediaFiles ] = useState([
    {filename:"Sample File.mp3"}
  ]);


  useEffect(() => {
    if(socket) {
      socket.on("group-mess", (data) => {
        setMessages((prev) => (
          console.log(prev),
          [...prev, data] 
        ));
      })

      socket.on("media-file", (data) => {
        console.log("Data Recieved!")
        setMediaFiles((prev) => [...prev, data]);
      })

    } else {
      console.log("Socket is Not loaded!")
    }
    

  }, [])

  

  useEffect (() => {
    const container = chatting.current;
    if(container) {
      container.scrollTop = container.scrollHeight;
      console.log(container.scrollHeight);
    }
  }, [messages]);

  const handleTouchStart = () => {
    console.log("Touch Start");
    setHoldTimeout(setTimeout(() => setShowSlider(true), 1000));
  };
  
  const handleTouchEnd = () => {
      clearTimeout(holdTimeout);
  };
  
  const handleSliderClick = () => {
    setShowSlider(false);
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 sm:h-full h-[90vh] p-4 sm:px-5 pb-[80px] w-full">
      <div className={`${width > 800 ? "hidden" : ""} transition-all`}>
          <div
            className={`slider-container ${showSlider ? 'visible' : 'hidden'}`}
          >
            {/* Add your slider content here */}
            <div className="slider-content mb-1">
              <GroupPage mediaFiles={mediaFiles}/>
              <div className='flex justify-end w-full'>
                <button className='p-1 text-white bg-red-500 rounded-md'
                  onClick={handleSliderClick}
                  >Close</button>
              </div>
            </div>
          </div>
      </div>
      <div 

        className="main-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchEnd}
        ref={chatting} style={{overflowY:"auto", height: "100%"} }>
        {/* Show chats */}
        {messages.map((m, i) => (
          m.id == socket.id ? 
          <div key={i+1} className='flex justify-end'>
            <div className='w-fit border bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg text-white mb-1'>
              {m.message}
            </div>
            <div className='w-1 h-1 bg-blue-400 rounded-full'></div>
          </div>
          :
          <div key={`index${i+1}`} className='flex justify-start'>
            <div className='w-1 h-1 bg-blue-400 rounded-full'></div>
            <div className='w-fit border bg-gradient-to-r from-sky-500 to-indigo-500 p-1 rounded-lg text-white mb-1'>
              {m.message}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ChatContainer;
