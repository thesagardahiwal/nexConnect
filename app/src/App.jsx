import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FirebaseProvider } from './firebase/FirebaseContext';
import { SocketProvider } from "./socket/SocketContext";
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import ScreenShare from './pages/ScreenShare';

function App() {
  return (
    <FirebaseProvider>
      <SocketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/chat/:roomId" element={<ChatPage />} />
            <Route path='/screen/:roomId' element={<ScreenShare />} />
            <Route path='*' element={<h1>Page Not found!</h1>} />
          </Routes>
        </Router>
      </SocketProvider>
    </FirebaseProvider>
  );
}

export default App;
