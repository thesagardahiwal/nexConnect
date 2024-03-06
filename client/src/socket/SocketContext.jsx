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

    console.log(socket);
    console.log("Reloaded!")

    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  if (!socket) {
    // throw new Error('useSocket must be used within a SocketProvider');
    console.log("Not Load");
  }
  return socket;
};
