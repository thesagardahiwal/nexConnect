// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import { useSocket } from '../contexts/SocketContext.jsx';
// import { useParams, useNavigate } from "react-router-dom";
// import BackHandle from '../hooks/BackHandle';
// import { useFirebase } from '../firebase/FirebaseContext.jsx'
// import ScreenShareSharpIcon from '@mui/icons-material/ScreenShareSharp';
// import StopScreenShareSharpIcon from '@mui/icons-material/StopScreenShareSharp';
// import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
// import Peer from "peerjs";
// import { useTheme } from '../contexts/ThemeContext.jsx';

// function ScreenShare() {
//   const screenRecieve = useRef(null);
//   const socket = useSocket();
//   const { roomId } = useParams();
//   const pushTo = useNavigate();
//   const [ onCall, setOnCall ] = useState(null);
//   const [ isBack, setIsBack ] = useState(true);
//   const [ isCasting, setIsCasting ] = useState(false);
//   const firebase = useFirebase();
//   const [ username, setUsername ] = useState('');
//   const { theme, toggleTheme } = useTheme();
//   let mediaStream;

//   const peer = new Peer ();

//   peer.on("open", id => {
//     socket.emit("join-screen", { id , roomId });
//   })

//   const Callhelper = (request) => {
//     if (request == 'screen-share') {
//       return navigator.mediaDevices.getDisplayMedia({video: true, audio: false})
//     }
//     else if (request == 'front-camera') {
//       return navigator.mediaDevices.getUserMedia({video: true, audio: false})
//     }
//   }

//   const handleCalling = (request) => {
//     const video = Callhelper(request);
//     video.then((stream) => {
//       mediaStream = stream;
//       setIsCasting(() => true);
//       socket.on("new-user-connection", (newUser) => {
//         if (newUser) {
//           peer.call(newUser, stream);
//         };
//       });
//       socket.emit("calling", {roomId: roomId, username: username });
//       startVideoStreaming(stream);
//     })
//     .catch((e) => {
//       console.log("Request is Cancelled!");
//       setIsCasting(() => false);
//     })
//   };

//   peer.on('call', (call) => {
//     call.answer(undefined);
//     setIsCasting(() => true);
//     call.on("stream", (remoteStream) => {
//       mediaStream = remoteStream;
//       startVideoStreaming(remoteStream);
//     })
//   });

//   const callHandlerListener = useCallback((data) => {
//     setOnCall((prev) => true);
    
//   }, [])

//   useEffect(() => {
//     socket.on("on-call", callHandlerListener);

//     if (!isBack) {
//       handdleStopCalling()
//       pushTo(`/chat/${roomId}`);
//       return;
//     }

//     return () => {
//       socket.off("on-call", callHandlerListener);
//       peer.destroy();
//     }
//   }, [isBack]);

//   useEffect(() => {
//     firebase.onAuthStateChanged((user) => {
//       if (!user) {
//         pushTo('/');
//       }
//     });

//   }, [])

//   const startVideoStreaming = (stream) => {
//     let video = screenRecieve.current;
//     if ( stream && video ) {
//       video.srcObject = stream;
//         video.play()
//     }
//   }

//   const handdleStopCalling = () => {
//     if (mediaStream) {
//       // Retrieve all tracks from the media stream
//       const tracks = mediaStream.getTracks();
//       // Stop each track
//       tracks.forEach(track => {
//           track.stop();
//       });
//       mediaStream = null;
//     } 
//     setIsCasting(() => false);
    
//   };



//   return (
//     <div className='w-[100vw] h-[100vh] overflow-hidden'>
//       <div className='h-[10%] w-[100%] absolute flex p-2 items-center bg-transperent'>
//         <BackHandle active={setIsBack} /> {Peer.id}
//       </div>
//       <div className={`w-full h-[100%]
//       ${isCasting ? "bg-blue-900" : `${theme == 'light' ? "light-rev-v2": "dark"}`}
//         flex justify-center items-center`}>
//         <video className='w-auto h-[90%] rounded-md' ref={screenRecieve} muted></video>
//       </div>
//       <div className='w-[100%] sticky bottom-0 p-10 flex bg-transperent justify-center items-center h-[7%]'>
//         {!isCasting ?
//           <button className='border rounded-full p-3 bg-purple-600 text-white'
//             onClick={() => handleCalling('screen-share')}
//             >
//               <ScreenShareSharpIcon />
//             </button>
//             :
//             <button className='border rounded-full p-3 bg-red-600 text-white'
//             onClick={handdleStopCalling}
//             >
//               <StopScreenShareSharpIcon />
//             </button>
//         }
        
        
//         <button className='border ml-2 rounded-full p-3 bg-red-600 text-white' onClick={() => window.location.reload()}>
//           <CancelPresentationIcon />
//         </button>
        
        
//       </div>
//     </div>
//   )
// }

// export default ScreenShare