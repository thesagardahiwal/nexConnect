import React, { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../contexts/SocketContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext.jsx';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CircularProgress } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext.jsx';

const BottomBar = ({width, isChatWithAI}) => {
  const [ message, setMessage ] = useState("");
  const [ file, setFile ] = useState(null);
  const [ username, setUsername ] = useState('');
  const socket = useSocket();
  const { roomId } = useParams();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const currentUser = firebase.getCurrentUser();
  const [ isLoading, setIsLoading ] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const getTime = () => {
    const currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let meridiem = "AM";
        if (hours > 12) {
          hours -= 12;
          meridiem = "PM";
        } else if (hours === 0) {
          hours = 12;
        }
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
        const time = `${hours}:${minutes} ${meridiem}`;
        return time;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!socket.id) return;
    if (message.length < 1) return;
    if (isChatWithAI) {
      socket.emit("ai-chat", {message: message, id:currentUser, username: username, roomId: roomId, time: getTime()});
      setMessage("");
      return;
    };

    socket.emit("group-message", {message: message, id:currentUser, username: username, roomId: roomId, time: getTime()});
    setMessage("");
    firebase.sendMessage({message: message, id: currentUser, username: username, roomId: roomId, time: getTime()});
      
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileShare = () => {
    setIsLoading(() => true);
    if(file) {
      console.log("Sharing File");
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        firebase.sendFile(username, file.name, fileContent, roomId, getTime() , (url) => {
          setIsLoading(() => false);
          socket.emit("share-file", {filename: file.name, roomId: roomId});
          socket.emit("group-message", {message: file.name, id:currentUser, username: username, roomId: roomId, time: getTime(), download: url});
          firebase.sendMessage({message: file.name, id: currentUser, username: username, roomId: roomId, time: getTime(), download: url});
          setFile(null);
         });
      }
      reader.readAsArrayBuffer(file);
      
    }
  }

  const handleInput = () => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.addEventListener('change', handleFileChange);
    inputElement.click();
  }

  const handleScreenShare = () => {
    navigate(`/screen/${roomId}`);
  }

  const recieveUsernameListener = useCallback(
    (data) => {
      firebase.getCurrentUserDetails(roomId)
      .then((user) => {
        setUsername((prev) => user);
      })
    }, [socket, username, firebase]
  )

  const kickoutListner = useCallback(async () => {
    await firebase.onAuthStateChanged((user) => {
      if (user) {
          firebase.isMeExist(roomId, user.uid);
      }
    })
  }, [message, firebase, socket])

  useEffect(() => {
    firebase.onAuthStateChanged((user) => {
      if (user) {
        firebase.getCurrentUserDetails(roomId)
        .then((user) => {
        setUsername((prev) => user);
      })
        socket.emit("get-username", { id: socket.id });
      } else {
        navigate('/');
      }
    });
  }, [message]);

  useEffect(() => {
    socket.on("recieve-username", recieveUsernameListener);
    socket.on("kickout", kickoutListner);
    return () => {
      socket.off("kickout", kickoutListner);
      socket.off("recieve-username", recieveUsernameListener);
    }
  }, []);

  const handleShareButton = () => {
    if (file) {
      handleFileShare();
      return;
    }
    handleInput();
  }

  return (
    <div className={`p-4 w-full ${theme == 'light' ? "light-rev": "dark"} sticky bottom-0 h-[80px]`}>
      {/* Input, Media send button, Send message button */}

      <div className='w-full flex justify-between items-center h-full'>
        <div className={`${width > 800 ? "w-fit" : "w-[40%]"} mr-2`}>
          <div className='flex items-center gap-2'>
            <div onClick={handleScreenShare} className='border hover:cursor-pointer p-1 flex items-center justify-center w-9 bg-gray-100 rounded-md h-9'>
              <CoPresentIcon  style={{color:"black"}}/>
            </div>
            
            <button
                className={`border p-1 bg-gray-100 flex items-center justify-center w-9 rounded-md text-white h-9`}
                onClick={() => handleShareButton()}>
                  {!file ? <AttachFileIcon style={{ color: "black", rotate: ("45deg") }} /> :
                  (isLoading? <CircularProgress disableShrink size={20} color='success' /> :
                    <CloudUploadIcon style={{ color: "blue" }} />)
                  }
              </button>
  
          </div>
        </div>
        <div className={`${width > 800 ? "w-[50%]" : "w-full"} flex justify-end`}>
          <form className='flex gap-2 w-full' onSubmit={e => handleSubmit(e)}>
            <input className='p-1 rounded-md w-full text-black' type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder={`${socket  ? "Message" : "Socket is disconnected"}`}/>
            <button type='submit' className='border bg-green-400 w-10 h-9 flex items-center justify-center rounded-md p-1'>
                <SendIcon style={{ width: 25, rotate: "-25deg", padding: 1, position: "absolute", top: "26px", color: "rgb(10,10,50)"}} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
