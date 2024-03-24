import React, { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../socket/SocketContext';
import { useNavigate, useParams } from 'react-router-dom';
import { screenShare, fileupload,sender} from '../assets/icons/index.js';
import { useFirebase } from '../firebase/FirebaseContext.jsx';

const BottomBar = ({width}) => {
  const [ message, setMessage ] = useState("");
  const [ file, setFile ] = useState(null);
  const [ username, setUsername ] = useState('');
  const socket = useSocket();
  const { roomId } = useParams();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const currentUser = firebase.getCurrentUser();
  

  const handleFileShare = () => {
    if(file) {
      console.log("Sharing File")
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        socket.emit("share-file", {filename: file.name, content: fileContent, roomId: roomId})
      }
      reader.readAsArrayBuffer(file);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(socket.id) {
      if(message) {
        socket.emit("group-message", {message: message, id:currentUser, username: username, roomId: roomId});
        setMessage("");
      };
      if(file) {
        console.log("File Recieved!");
        handleFileShare();
      }
      firebase.sendMessage({message: message, id: currentUser, username: username, roomId: roomId})
    }
  };

  const handleInput = () => {
    const inputElement = document.createElement('input');
    
    // Set attributes for the input element
    inputElement.type = 'file';
    // inputElement.accept = '.jpg, .jpeg, .png'; // Specify accepted file types if needed
    inputElement.addEventListener('change', handleFileChange);

    // Trigger a click event to open the file dialog
    inputElement.click();
  }

  const handleScreenShare = () => {
    navigate(`/screen/${roomId}`);
  }

  const recieveUsernameListener = useCallback(
    (data) => {
      firebase.getCurrentUserDetails(roomId)
      .then((result) => {
        setUsername(result?.username);
      })
    }, [socket, username, firebase]
  )

  useEffect(() => {
    firebase.onAuthStateChanged((user) => {
      if (user) {
        firebase.getCurrentUserDetails(roomId)
        .then((result) => {
        setUsername((prev) => result?.username);
      })
        socket.emit("get-username", { id: socket.id });
      } else {
        navigate('/');
      }
    });
  }, [message]);

  useEffect(() => {
    socket.on("recieve-username", recieveUsernameListener);
    return () => {
      socket.off("recieve-username", recieveUsernameListener);
    }
  }, [])


  return (
    <div className="p-4 w-full bg-gradient-to-r from-pink-500 to-indigo-500 sticky bottom-0 h-[80px]">
      {/* Input, Media send button, Send message button */}

      <div className='w-full flex justify-between items-center h-full'>
        <div className={`${width > 800 ? "w-fit" : "w-[40%]"} mr-2`}>
          <div className='flex items-center gap-2'>
            <div className='border hover:cursor-pointer p-1 flex items-center justify-center w-9 bg-gray-100 rounded-md h-9'>
              <img src={screenShare} alt="share" onClick={handleScreenShare} />
            </div>
            
              {width > 800 ? 
              <div className='flex'>
                <input type='file' className='p-1 text-white bg-gradient-to-r from-pink-500 to-violet-400 rounded-md' onChange={handleFileChange} width={30} height={30}  placeholder='upload file'/>
              </div>
              :
              <>
                <button onClick={() => handleInput()}>
                  <img src={fileupload} width={22} alt="share file" className='border p-1 bg-gray-100 flex items-center justify-center w-9 rounded-md text-white h-9'/>
                </button>
              </>
              }
            
          </div>
        </div>
        <div className='w-full'>
          <form className='flex gap-2 w-full' onSubmit={e => handleSubmit(e)}>
            <input className='p-1 rounded-md w-full' type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder={`${socket  ? "Message" : "Socket is disconnected"}`}/>
            <button type='submit' className='border bg-green-400 w-9 h-9 flex items-center justify-center rounded-md p-1'>
              <img src={sender} width={25} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
