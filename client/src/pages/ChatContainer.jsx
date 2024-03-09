import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSocket } from '../socket/SocketContext';
import GroupPage from './GroupPage.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext.jsx';

const ChatContainer = ({width}) => {
  const socket = useSocket();
  const [ messages, setMessages ] = useState([]);
  const [ showSlider, setShowSlider ] = useState(false);
  const [ holdTimeout, setHoldTimeout ] = useState(null);
  const [ newMember, setNewMember ] = useState('');
  const [ mediaFiles, setMediaFiles ] = useState([]);
  const { roomId } = useParams();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const chatting = useRef();


  const groupMessageListner = useCallback(
    (data) => {
      setMessages((prev) => (
        [...prev, data] 
      ));
    }, [messages, socket]
  );

  const mediaFileListner = useCallback(
    (data) => {
      setMediaFiles((prev) => [...prev, data]);
    }, [mediaFiles, socket]
  )
  
  const newMemberListener = useCallback(
    (data) => {
      const { username  } = data;
      setNewMember(username);
      setTimeout(()=> setNewMember(''), 3000);
    }, [socket]
  );

  const leaveGroupListener = useCallback(
    async (data) => {
      const { online } = data;
      const isExist = await firebase.checkUsername(roomId);
      if (!online) {
        if (isExist) {
          await firebase.logout(roomId);
        }
        navigate('/');
      } else {
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
  }, [messages]);

  const handleTouchStart = () => {
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
        {newMember &&
          <div className='w-full h-[70px] flex justify-center items-center bg-gradient-to-r from-pink-600 to-violet-700'>
            <h1 className='text-white font-semibold'>
            🎊'{newMember}' is joined in Room 🎊
            </h1>
          </div>
          }
        {messages.map((m, i) => (
          m.id == socket.id ? 
          <div key={i+1} className='flex my-2 justify-end'>
            <div className='w-fit text-white mb-1'>
              <h1 className='border bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg'>{m.message}</h1>
            </div>
            <div className='w-1 h-1 bg-blue-400 rounded-full'></div>
          </div>
          :
          <div key={`index${i+1}`} className='flex my-2 justify-start'>
            <div className='w-1 h-1 bg-blue-400 rounded-full'></div>
            <div className='w-fit text-white my-1'>
              <h1 className='border bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg'>{m.message}</h1>
              <span className='text-slate-200 text-[12px] font-semibold flex justify-start '>@{m.username}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ChatContainer;
