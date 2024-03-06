// src/pages/LoginPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFirebase } from '../firebase/FirebaseContext';
import { useSocket } from '../socket/SocketContext';
import { loader, join, logo } from "../assets/icons/index.js";

function LoginPage() {
  const [roomID, setRoomID] = useState('');
  const navigate = useNavigate();
  const firebase = useFirebase();
  const socket = useSocket();
  const myElementRef = useRef();
  const [ loading, setLoading ] = useState(false);
  const [elementWidth, setElementWidth] = useState(0);
  const handleResize = () => {
    if (myElementRef.current) {
      // console.log(myElementRef.current.offsetWidth);
      setElementWidth(myElementRef.current.offsetWidth);
    }
  };

  const handleCreatingButton = () => {

    const generatedRoomID = Math.floor(100000 + Math.random() * 900000).toString();
    if(socket) {
      console.log("Creating Room!")
      socket.emit("create-room", {id: generatedRoomID});
      socket.on("room-chat", (data) => {
        console.log(data);
        if (isAvailable(data[1])) {
          console.log("Available", data[1]);
          navigate(`/chat/${data[1]}`);
        }
      })
    }

    const isAvailable = async(roomNumber) => {
      try {
        const isInUse = await firebase.checkUsername(roomNumber);
        if (!isInUse) {
          await firebase.login(roomNumber);
          localStorage.setItem('room', roomNumber);
          return true;
        }
        return false;
      } catch (error) {
        alert("Internet Connection is Bad!")
        console.log(error);
      }
    }
  };

  useEffect(()=>{
    if (socket) {
      console.log(socket.id);
      socket.on("message", (data) => {
        console.log("Recieved:", data);
      })
    }
  }, [socket]);




  useEffect(() => {

    handleResize();
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const isExist = async () => {
    if (socket) {
      const isExist = await firebase.checkUsername(roomID);
      if (isExist) {
        socket.emit("join-room", roomID);
        socket.on("member-joined", (data) => {
          setLoading(false);
          if (data) {
            navigate(`/chat/${roomID}`);
          }
        })
      }
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    isExist();
    
  }

  return (
    <div className=' h-[100vh]' ref={myElementRef}>
      <div className='flex h-full w-full'>
        <div className={`${elementWidth > 700 ? "w-[50%]" : "w-full"} h-full flex items-center justify-center p-4 bg-gradient-to-r from-sky-500 to-indigo-500`}>
          <div className={`w-[400px] h-full sm:h-fit ${elementWidth < 700 ? "mt-[300px]" : ""}`}>
          { elementWidth < 700 && <div className='w-full mt-10 mb-[50px] flex flex-col items-center justify-center'>
              <img src={logo} width={150} alt="" />
              <h1 className='text-white font-semibold mt-2 text-3xl'>NexConnect</h1>
            </div>}
              <div className='flex w-full justify-center'>
                <button className='rounded-md border font-bold w-full text-white bg-gradient-to-r from-purple-500 to-red-500 py-3 m-1' onClick={handleCreatingButton}>Create Group</button> <br /><br />
              </div>
              <p className='text-white my-2 w-full text-center'></p>
              <h1 className='text-white font-semibold flex justify-start w-full'>
                Join Group
              </h1>
              <form onSubmit={e => handleSubmit(e)} className='flex items-center w-full justify-center'>
                <div className='flex justify-start w-full'>
                  <input type="text" id='in' className='rounded-md border w-full border-black p-2' value={roomID} onChange={e => setRoomID(e.target.value)} placeholder='Enter Group Code'/>
                </div>
                <div className='flex justify-end w-[20%]'>
                  <button type='submit' onClick={() => setLoading(true) } className='rounded-md border text-white w-10 overflow-hidden bg-green-500 p-2 m-1'>
                    {loading ? <img src={loader} width={25} alt="loading" /> : <img src={join} width={30} alt='join' />}
                  </button>
                </div>
              </form>

          </div>
        </div>
        {elementWidth > 700 &&
        <div
          className='flex text-white w-full h-full bg-gradient-to-r from-indigo-500 to-pink-500 justify-center items-center'
          >

              <img src={logo} width={300} alt="" />
              <h1 className='text-[5vh] font-extrabold'>NexConnect</h1>
        </div>}
      </div>

      
      
    </div>
  );
}

export default LoginPage;
