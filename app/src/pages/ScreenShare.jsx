import React, { useCallback, useEffect, useRef, useState } from 'react'
import Peer from 'peerjs';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useParams, useNavigate } from "react-router-dom";
import BackHandle from '../hooks/BackHandle';
import { useFirebase } from '../firebase/FirebaseContext.jsx'
import ScreenShareSharpIcon from '@mui/icons-material/ScreenShareSharp';
import StopScreenShareSharpIcon from '@mui/icons-material/StopScreenShareSharp';
import DuoSharpIcon from '@mui/icons-material/DuoSharp';

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
  
  const Callhelper = (request) => {
    if (request == 'screen-share') {
      return navigator.mediaDevices.getDisplayMedia({video: true, audio: false})
    }
    else if (request == 'front-camera') {
      return navigator.mediaDevices.getUserMedia({video: true, audio: false})
    }
  }

  const handleCalling = (request) => {
    const video = Callhelper(request);
    video.then((stream) => {
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
      console.log("Request is Cancelled!");
    })
  };

  peer.on('call', (call) => {
    call.answer(undefined);
    call.on("stream", (remoteStream) => {
      mediaStream = remoteStream;;
      startVideoStreaming(remoteStream);
    })
  });

  const callHandlerListener = useCallback((data) => {
    setOnCall((prev) => true);
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
    let video = screenRecieve.current;
    if ( stream && video ) {
      video.srcObject = stream;
      // Ensure that the video is loaded and ready to play
      if (video.readyState >= 2) {
        video.play()
          .catch(error => {
            console.error('Error playing video:', error);
          });
      } else {
        video.addEventListener('loadeddata', () => {
          video.play()
            .catch(error => {
              alert("Go to the previous page and Refresh it!");
              console.error('Error playing video:', error);
              pushTo(`/chat/${roomId}`);
            });
        });
      }
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
  };



  return (
    <div className='w-[100vw] h-[100vh] '>
      <div className='bg-gradient-to-r h-[7%] flex px-3 items-center from-pink-400 to-indigo-400'>
        <BackHandle active={setIsBack} />
      </div>
      <div className='w-full h-[86%] bg-gradient-to-r from-pink-900 to-indigo-900 flex justify-center items-center'>
        

        <video className='w-auto h-[90%] rounded-md' ref={screenRecieve} muted></video>
      </div>
      <div className='w-[100%] px-10 flex gap-2 bg-gradient-to-r from-pink-400 to-indigo-400 items-center h-[7vh]'>
          <button className='border rounded-md px-2 py-1 text-white'
            onClick={() => handleCalling('screen-share')}
            >
              <ScreenShareSharpIcon />
            </button>
          <button className='border hover:bg-red-600 rounded-md px-2 py-1 bg-red-400 text-white'
            onClick={handdleStopCalling}
            >
              <StopScreenShareSharpIcon />
            </button>

      </div>
    </div>
  )
}

export default ScreenShare