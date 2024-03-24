import React, { useCallback, useEffect, useRef, useState } from 'react'
import Peer from 'peerjs';
import { useSocket } from '../socket/SocketContext';
import { useParams, useNavigate } from "react-router-dom";
import BackHandle from '../hooks/BackHandle';
import { record, screenoff, user_calling, picCall, callReject } from "../assets/icons/index.js"
import { useFirebase } from '../firebase/FirebaseContext.jsx'

function ScreenShare() {
  const screenRecieve = useRef(null);
  const socket = useSocket();
  const { roomId } = useParams();
  const pushTo = useNavigate();
  const [ onCall, setOnCall ] = useState(null);
  const [ isBack, setIsBack ] = useState(true);
  const firebase = useFirebase();
  
  let mediaStream;
  
  

  const peer = new Peer ( undefined, {
    host: '/',
    port:'3001'
  });

  peer.on('open', id => {
    socket.emit("join-screen", {userId: id, roomId: roomId});
  });

  const handleCalling = () => {
    
    window.navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
      mediaStream = stream;
      socket.on("new-user-connection", (newUser) => {
        if (newUser) {
          peer.call(newUser, stream);
        };
      });
      socket.emit("calling", {roomId: roomId});
      startVideoStreaming(stream);
    })
    .catch((e) => {
      console.log("Failed to connect!");
    })
  };

  peer.on('call', (call) => {
    call.answer(undefined);
    call.on("stream", (remoteStream) => {
      startVideoStreaming(remoteStream);
    })
  })
  const callHandlerListener = useCallback((data) => {
    setOnCall((prev) => true);
    console.log("Event Fired!")
  }, [])

  useEffect(() => {
    socket.on("on-call", callHandlerListener);

    if (!isBack) {
      handdleStopCalling()
      pushTo(`/chat/${roomId}`);
      return;
    }

    return () => {
      socket.off("on-call", callHandlerListener)
    }
  });

  useEffect(() => {
    firebase.onAuthStateChanged((user) => {
      if (user) {
        console.log("User Logged In!", user.uid);
      } else {
        console.log("User Looged Out!");
        pushTo('/');
      }
    });
  }, [])

  const startVideoStreaming = (stream) => {
    if(screenRecieve.current) {
      screenRecieve.current.srcObject = stream;
      screenRecieve.current.play();
    }
  }

  const handdleStopCalling = () => {
    if (mediaStream) {
      // Retrieve all tracks from the media stream
      const tracks = mediaStream.getTracks();
      // Stop each track
      tracks.forEach(track => {
          track.stop();
      });
      mediaStream = null;
    }
  }


  return (
    <div className='w-full h-[100vh] '>
      <div className='bg-gradient-to-r h-[7vh] flex px-3 items-center from-pink-400 to-indigo-400'>
        <BackHandle active={setIsBack} />
      </div>
      <div className='w-full h-[86vh] bg-gradient-to-r from-pink-900 to-indigo-900 flex justify-center items-center'>
        

        <video className='w-auto h-[90%] rounded-md' ref={screenRecieve} muted></video>
      </div>
      <div className='w-full px-10 flex gap-2 bg-gradient-to-r from-pink-400 to-indigo-400 items-center h-[7vh]'>
          <button className='border rounded-md px-2 py-1 hover:bg-green-600 bg-green-400 text-white'
            onClick={handleCalling}
            >
              <img src={record} alt="share-screen" width={25}/>
            </button>
          <button className='border hover:bg-red-600 rounded-md px-2 py-1 bg-red-400 text-white'
            onClick={handdleStopCalling}
            >
              <img src={screenoff} alt="" />
            </button>

      </div>
    </div>
  )
}

export default ScreenShare