import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FirebaseProvider } from './firebase/FirebaseContext';
import { SocketProvider } from "./contexts/SocketContext";
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
// import ScreenShare from './pages/ScreenShare';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  
  return (
    <FirebaseProvider>
      <SocketProvider>
          <ThemeProvider>
            <Router>
              <Routes>
                <Route path="/" index element={<LoginPage />} />
                <Route path="/chat/:roomId" element={<ChatPage />} />
                {/* <Route path='/screen/:roomId' element={<ScreenShare />} /> */}
                <Route path='*' element={<h1 className='h-screen w-screen flex items-center justify-center text-white font-bold text-2xl'>Page Not found!</h1>} />
              </Routes>
            </Router>
          </ThemeProvider>
      </SocketProvider>
    </FirebaseProvider>
  );
}

export default App;
