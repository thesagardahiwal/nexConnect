import { createContext, useContext, useEffect, useMemo} from 'react';
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  // {transports: ['websocket']}
  const socket = useMemo(() => io(import.meta.env.VITE_SOCKET_URL, {transports: ['websocket']}), []);

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
