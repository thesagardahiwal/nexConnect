import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSocket } from '../socket/SocketContext';
import { logout, logo, room, id, download } from '../assets/icons';

const LeftBar = () => {
  const { roomId } = useParams();
  const socket = useSocket();
  const [ mediaFiles, setMediaFiles ] = useState([
    {filename:"Sample File.mp3"}
  ]);

  const handleDownload = (data) => {
      console.log('File received from server:', data);
      const blob = new Blob([data.content]);
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = data.filename;
      downloadLink.click();
  }
  useEffect(() => {
    socket.on("media-file", (data) => {
      console.log("Data Recieved!")
      console.log(data);
      const result = data;
      if (result) {
        setMediaFiles((prev) => [...prev, result]);
      }
    })
  }, [])
  return (
    <div className="w-1/3 bg-gradient-to-r from-purple-500 to-pink-500 h-screen p-4">
      {/* Small session */}
      <div className='w-full gap-2 h-[100px] flex text-white justify-center items-center text-2xl font-semibold'>
        <img src={logo} width={50} alt="logo" />
        <p>NexConnect</p>
      </div>

      <div className="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-md p-2">
          {/* Show Join ID and Leave Group Button */}
          <div className='flex gap-2'>
            <div className='font-semibold flex items-center gap-1 text-gray-100'><img src={room} width={25} alt="room" /> Room ID:</div>
            <div className='font-medium text-white'>{roomId}</div>
          </div>

          <div className='flex gap-2 mt-2'>
            <img src={id} width={25} alt="id" />
            <h1 className='font-semibold text-gray-100'>ID: <span className='font-normal text-white'>{socket.id}</span></h1>
          </div>
          <div className='text-gray-500 mt-2 w-full flex items-center justify-center '>
            <Link to={'/'} className='flex gap-1 w-fit rounded-md borde bg-white hover:bg-gradient-to-r from-red-400 to-red-500 hover:text-white hover:cursor-pointer transition-all p-1'>
              Logout
              <img src={logout} alt="logout" />
            </Link>
          </div>
      </div>

      {/* Large session */}
      <div className='font-semibold text-white'>
        Shared Files:
      </div>
      <div className='bg-gradient-to-r from-purple-400 to-pink-400 h-[460px] mt-2 p-1 rounded-md'>
          {/* Show all files */}
          <ul className='p-2'>
            {mediaFiles?.map((file, i) => (
              <li className='text-white bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-between items-center my-1 rounded-md p-1' key={`index-Of${i}`}>
                <div className='flex start-0'>
                  {file.filename}
                </div>
                <div className='flex-end flex'>
                  <button className='bg-green-500 m-1 rounded-md p-1' onClick={() => {
                    handleDownload(file)
                  }}>
                    <img src={download} alt="download" width={25} />
                  </button>
                </div>
              </li>
              ))}
          </ul>
      </div>

    </div>
  );
};

export default LeftBar;
