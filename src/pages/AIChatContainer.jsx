import React, { useCallback, useEffect, useRef, useState } from 'react'
import BackgroundLetterAvatars from "../components/Avatar.jsx";
import { useSocket } from '../contexts/SocketContext.jsx';
import { useTheme } from '../contexts/ThemeContext';

function AIChatContainer() {

    

    const socket = useSocket();
    const [ messages, setMessages ] = useState([
        {message: "Its AI", user: false, time: "12:00 PM"},
        {message: "How can I help you with nexConnect ?", user: false, time: "12:01 PM"},
        {message: "Why should I use this app?", user: true, time: "12:02 PM"},
        {message: "Ah, Why not!.\n It gives you fantastic feature like 'Creating' or 'Joining' Room Without any Authentication, Including Sharing MediaFiles, Screen and Many more!", user: false, time: "12:03 PM"},
    ]);
    
    const chatting = useRef();
    const { theme, toggleTheme } = useTheme();

    const groupMessageListner = useCallback(
        (data) => {
            const { message, id, username, roomId, time } = data;
          setMessages((prev) => (
            [...prev, {message: message, username: username, user: true, time}]
          ));
        }, [messages]
      );
    

    useEffect (() => {
        const container = chatting.current;
        if(container) {
          container.scrollTop = container.scrollHeight;
        }
    
      }, [messages]);

    useEffect(() => {

        socket.on("message-with-ai", groupMessageListner);

        return () => {
            socket.off("message-with-ai", groupMessageListner);
        }

    }, [])

  return (
    <div
    className={`${theme == 'light' ? "light": "dark"} h-[90vh] p-4 sm:px-5 pb-[80px] w-full`}
    >
        <div 
        className="main-container hide-scrool-bar"
        ref={chatting} style={{overflowY:"auto", height: "100%"} }>
        {/* Show chats */}
        
        {/*  MESSAGE UI */}
        {messages.map((data, i) => (
          <div key={`index${i+1}`} className={`flex my-2 ${data.user === true ? "justify-end" : "justify-start"}`}>
            <div className='max-w-[80%]'>
              <h1 className={`flex p-2 w-fit text-white my-1 ${data.user === true ?  "rounded-l-2xl rounded-tr-2xl bg-gradient-to-r from-cyan-500 to-blue-500" : "rounded-r-2xl rounded-tl-2xl bg-gradient-to-r mx-2 from-pink-400 to-pink-400"} justify-center  texl-xl`}
                style={{minWidth: "40px"}}
              >{data.message}</h1>
              <div className={`text-slate-200 flex w-full 
               ${data.user === true ? "justify-end" : "justify-start" } 
               text-[10px] items-center gap-1`}>
                {data.user === true ? 
                  <>
                    {data.time}
                  </>
                  :
                  <>
                    <BackgroundLetterAvatars username={"AI"} size='10px' />
                    <p className='font-semibold'>
                      ~ AI
                    </p>
                    &nbsp; {data.time}
                  </>
                }
                </div>
            </div>
            
          </div>
        ))}

      </div>
    </div>
  )
}

export default AIChatContainer