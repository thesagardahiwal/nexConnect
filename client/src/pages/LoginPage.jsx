// src/pages/LoginPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo.jsx';
import CreateRoom from '../forms/CreateRoom.jsx';
import JoinRoom from '../forms/JoinRoom.jsx';
import LogoBigView from '../components/LogoBigView.jsx';
import RoomButton from '../components/RoomButton.jsx';
import { back } from "../assets/icons/index.js"
import BackHandle from '../hooks/BackHandle.jsx';

function LoginPage() {

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




  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);


  return (
    <div className=' h-[100vh]' ref={myElementRef}>
      <div className='flex h-full w-full'>
        <div className={`${elementWidth > 1023 && elementHeight < 1100 ? "w-[50%]" : 'w-full'} h-full flex items-center justify-center p-4 bg-gradient-to-r from-sky-500 to-indigo-500`}>
          <div className={`w-[400px] h-full sm:h-fit ${elementWidth < 700 ? "mt-[120px]" : ""}`}>
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
