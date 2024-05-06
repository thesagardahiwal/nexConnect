import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  // {transports: ['websocket']}
  const socket = useMemo(() => io(import.meta.env.VITE_LOCAL_URL), []);

  useEffect(()=> {
    return () => {
      socket.disconnect();
    }
  },[])
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};
