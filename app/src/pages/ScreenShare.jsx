import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSocket } from '../contexts/SocketContext.jsx';
import { useParams, useNavigate } from "react-router-dom";
import BackHandle from '../hooks/BackHandle';
import { useFirebase } from '../firebase/FirebaseContext.jsx'
import ScreenShareSharpIcon from '@mui/icons-material/ScreenShareSharp';
import StopScreenShareSharpIcon from '@mui/icons-material/StopScreenShareSharp';
import DuoSharpIcon from '@mui/icons-material/DuoSharp';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Peer from "peerjs";
import { useTheme } from '../contexts/ThemeContext.jsx';
// import { usePeer } from '../contexts/peerContext.jsx';

function ScreenShare() {
  const screenRecieve = useRef(null);
  const socket = useSocket();
  const { roomId } = useParams();
  const pushTo = useNavigate();
  const [ onCall, setOnCall ] = useState(null);
  const [ isBack, setIsBack ] = useState(true);
  const [ isCasting, setIsCasting ] = useState(false);
  const firebase = useFirebase();
  const [ username, setUsername ] = useState('');
  const { theme, toggleTheme } = useTheme();
  let mediaStream;

  // const Peer = usePeer();
  const peer = new Peer ( undefined, {
    host: '/',
    port:'3001'
  });

  peer.on("open", id => {
    socket.emit("join-screen", { id , roomId });
  })

  // console.log(Peer);

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
      setIsCasting(() => true);
      socket.on("new-user-connection", (newUser) => {
        if (newUser) {
          peer.call(newUser, stream);
        };
      });
      socket.emit("calling", {roomId: roomId, username: username });
      startVideoStreaming(stream);
    })
    .catch((e) => {
      console.log("Request is Cancelled!");
      setIsCasting(() => false);
    })
  };

  peer.on('call', (call) => {
    call.answer(undefined);
    setIsCasting(() => true);
    call.on("stream", (remoteStream) => {
      mediaStream = remoteStream;
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
  }, [isBack]);

  useEffect(() => {
    firebase.onAuthStateChanged((user) => {
      if (user) {
        
        console.log("User Logged In!");
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
      window.location.reload();
    } 
    setIsCasting(() => false);
    
  };



  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden'>
      <div className='h-[10%] w-[100%] absolute flex p-2 items-center bg-transperent'>
        <BackHandle active={setIsBack} /> {Peer.id}
      </div>
      <div className={`w-full h-[100%]
      ${isCasting ? "bg-blue-900" : `${theme == 'light' ? "light-rev-v2": "dark"}`}
        flex justify-center items-center`}>
        <video className='w-auto h-[90%] rounded-md' ref={screenRecieve} muted></video>
      </div>
      <div className='w-[100%] sticky bottom-0 p-10 flex bg-transperent justify-center items-center h-[7%]'>
        {!isCasting ?
          <button className='border rounded-full p-3 bg-purple-600 text-white'
            onClick={() => handleCalling('screen-share')}
            >
              <ScreenShareSharpIcon />
            </button>
            :
            <button className='border rounded-full p-3 bg-red-600 text-white'
            onClick={handdleStopCalling}
            >
              <StopScreenShareSharpIcon />
            </button>
        }
        
        
        <button className='border ml-2 rounded-full p-3 bg-red-600 text-white' onClick={() => window.location.reload()}>
          <CancelPresentationIcon />
        </button>
        
        
      </div>
    </div>
  )
}

export default ScreenShare