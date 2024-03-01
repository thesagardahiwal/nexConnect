// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FirebaseProvider } from './firebase/FirebaseContext';
import { SocketProvider } from "./socket/SocketContext";
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <FirebaseProvider>
      <SocketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/chat/:roomId" element={<ChatPage />} />
          </Routes>
        </Router>
      </SocketProvider>
    </FirebaseProvider>
  );
}

export default App;
