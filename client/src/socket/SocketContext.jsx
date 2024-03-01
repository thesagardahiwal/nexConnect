import React, { createContext, useContext, useEffect, useState } from 'react';
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000', {
      reconnection: true,  // Enable reconnection
      reconnectionAttempts: 5,  // Number of attempts before giving up
      reconnectionDelay: 1000,  // Delay between reconnection attempts (in milliseconds)
    });

    setSocket(newSocket);

    // Optional: Add event listeners for reconnection events
    newSocket.on('reconnect', (attemptNumber) => {
      console.log('Reconnected after attempt number:', attemptNumber);
    });

    newSocket.on('reconnecting', (attemptNumber) => {
      console.log('Attempting to reconnect. Attempt number:', attemptNumber);
    });

    newSocket.on('reconnect_error', (error) => {
      console.error('Reconnection error:', error.message);
    });

    return () => newSocket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};
