import React, { useState } from 'react';
import { useSocket } from '../socket/SocketContext';

const ChatContainer = () => {
  const socket = useSocket();
  const [ messages, setMessages ] = useState([]);
  return (
    <div className="bg-gray-100 sm:h-full h-[93vh] p-4 w-full">
      {/* Show chats */}
      <div className='flex justify-between'>
        <h1>Hii</h1>
        <h1>Helo</h1>
      </div>
    </div>
  );
};

export default ChatContainer;
