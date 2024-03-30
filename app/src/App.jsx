import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FirebaseProvider } from './firebase/FirebaseContext';
import { SocketProvider } from "./contexts/SocketContext";
import { PeerProvider } from "./contexts/peerContext"
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import ScreenShare from './pages/ScreenShare';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  
  return (
    <FirebaseProvider>
      <SocketProvider>
        <PeerProvider>
          <ThemeProvider>
            <Router>
              <Routes>
                <Route path="/" index element={<LoginPage />} />
                <Route path="/chat/:roomId" element={<ChatPage />} />
                <Route path='/screen/:roomId' element={<ScreenShare />} />
                <Route path='*' element={<h1>Page Not found!</h1>} />
              </Routes>
            </Router>
          </ThemeProvider>
        </PeerProvider>
      </SocketProvider>
    </FirebaseProvider>
  );
}

export default App;
