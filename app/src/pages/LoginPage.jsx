// src/pages/LoginPage.jsx
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo.jsx';
import CreateRoom from '../forms/CreateRoom.jsx';
import JoinRoom from '../forms/JoinRoom.jsx';
import LogoBigView from '../components/LogoBigView.jsx';
import RoomButton from '../components/RoomButton.jsx';
import BackHandle from '../hooks/BackHandle.jsx';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import { useNavigate } from 'react-router-dom';


function LoginPage() {

  const socket = useSocket();
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [ createButtonActive, setCreateButtonActive ] = useState(false);
  const [ joinButtonActive, setJoinButtonActive ] = useState(false);

  const myElementRef = useRef();
  const [elementWidth, setElementWidth] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);


  const handleResize = () => {
    if (myElementRef.current) {
      setElementWidth(myElementRef.current.offsetWidth);
      setElementHeight(myElementRef.current.offsetHeight);
    }
  };

  const roomCreationListner = useCallback((data) => {
    const { roomId , username , userId } = data;
    firebase.onAuthStateChanged((user) => {
      if (user) {
        navigate(`/chat/${roomId}`)
      } else {
        navigate('/');
      }
    });

  }, [firebase, socket]);

  const isJoinedListener = useCallback(
    async (data) => {
      const { Id, roomId } = data;
      if( Id == socket.id ) {
        firebase.onAuthStateChanged((user) => {
          if (user) {
            navigate(`/chat/${roomId}`)
          } else {
            navigate('/');
          }
        }) 
      } 
    }, []
  );



  useEffect(() => {
        socket.on("room-chat", roomCreationListner);
        socket.on("isJoined", isJoinedListener)

        return () => {
          socket.off("room-chat", roomCreationListner);
        }
  }, []);


  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);


  return (
    <div className="h-[100vh] bg-[url('../public/nexConnect.png')] bg-center bg-cover" ref={myElementRef}>
      <div className='flex h-full w-full'>
        <div className={`${elementWidth > 1023 && elementHeight < 1100 ? "w-[50%]" : 'w-full'} h-full flex items-center justify-center p-4 bg-tranperent`}>
          <div className={`w-[400px] transition-all h-full sm:h-fit ${elementWidth < 700 ? "mt-[120px]" : ""}`}>
            {(elementWidth < 1023 || elementHeight > 1023) && <Logo />}
            {joinButtonActive ? 
            (
              <>
              <JoinRoom />
              <BackHandle active={setJoinButtonActive}/>
              </>
            ) : createButtonActive ? 
                (
                  <>
                    <CreateRoom />
                    <BackHandle active={setCreateButtonActive}/>
                  </>
                ) :
                    ( 
                      <>
                      <RoomButton Active={setCreateButtonActive} IDE={"Create"} />
                      <RoomButton Active={setJoinButtonActive} IDE={"Join"}/>
                      </>
                    ) }

          </div>
        </div>
        {/* Right Ride */}
        {elementWidth > 1023 && elementHeight < 1200 && <LogoBigView />}
      </div>



    </div>
  );
}

export default LoginPage;
