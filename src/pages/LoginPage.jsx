// src/pages/LoginPage.jsx
import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import Logo from '../components/Logo.jsx';
import RoomButton from '../components/RoomButton.jsx';
import BackHandle from '../hooks/BackHandle.jsx';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import { useNavigate } from 'react-router-dom';

// Lazy-loaded heavy components
const CreateRoom = lazy(() => import('../forms/CreateRoom.jsx'));
const JoinRoom = lazy(() => import('../forms/JoinRoom.jsx'));
const LogoBigView = lazy(() => import('../components/LogoBigView.jsx'));

function LoginPage() {
  const socket = useSocket();
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [createButtonActive, setCreateButtonActive] = useState(false);
  const [joinButtonActive, setJoinButtonActive] = useState(false);

  const myElementRef = useRef(null);
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 });

  // Resize observer (efficient alternative to window resize)
  useEffect(() => {
    if (!myElementRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setElementSize({ width, height });
      }
    });

    resizeObserver.observe(myElementRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const roomCreationListener = useCallback((data) => {
    const { roomId } = data;
    firebase.onAuthStateChanged(user => {
      navigate(user ? `/chat/${roomId}` : '/');
    });
  }, [firebase, navigate]);

  const isJoinedListener = useCallback((data) => {
    const { Id, roomId } = data;
    if (Id === socket.id) {
      firebase.onAuthStateChanged(user => {
        navigate(user ? `/chat/${roomId}` : '/');
      });
    }
  }, [firebase, navigate, socket.id]);

  useEffect(() => {
    socket.on('room-chat', roomCreationListener);
    socket.on('isJoined', isJoinedListener);
    return () => {
      socket.off('room-chat', roomCreationListener);
      socket.off('isJoined', isJoinedListener);
    };
  }, [socket, roomCreationListener, isJoinedListener]);

  const { width, height } = elementSize;
  const showSideLogo = width > 1023 && height < 1200;
  const showTopLogo = width < 1023 || height > 1023;

  return (
    <div
      className="h-screen overflow-hidden bg-[url('/nexConnect05.svg')] bg-center bg-cover"
      ref={myElementRef}
    >
      <div className="flex h-full w-full">
        <div className={`${width > 1023 && height < 1100 ? "w-[50%]" : 'w-full'} h-full flex items-center justify-center p-4`}>
          <div className={`w-[400px] transition-all sm:h-fit h-full ${width < 700 ? "mt-[120px]" : ""}`}>
            {showTopLogo && <Logo />}
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              {joinButtonActive ? (
                <>
                  <JoinRoom />
                  <BackHandle active={setJoinButtonActive} />
                </>
              ) : createButtonActive ? (
                <>
                  <CreateRoom />
                  <BackHandle active={setCreateButtonActive} />
                </>
              ) : (
                <>
                  <RoomButton Active={setCreateButtonActive} IDE="Create" />
                  <RoomButton Active={setJoinButtonActive} IDE="Join" />
                </>
              )}
            </Suspense>
          </div>
        </div>

        {showSideLogo && (
          <Suspense fallback={null}>
            <LogoBigView />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
