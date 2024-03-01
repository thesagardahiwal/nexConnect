import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const LeftBar = () => {
  const { roomId } = useParams();
  const [ mediaFiles, setMediaFiles ] = useState([]);
  return (
    <div className="w-1/5 bg-gray-200 h-full p-4">

      {/* Small session */}
      <div className='w-full flex justify-center text-2xl font-semibold'>
        NexConnect
      </div>

      <div className="mb-4 flex">
          {/* Show Join ID and Leave Group Button */}
          <h1>Room ID:</h1>
          <h1>{roomId}</h1>
      </div>

      {/* Large session */}
      <div>
          {/* Show all files */}
          <ul>
            {mediaFiles?.map((file, i) => (
              <li key={`index-Of${i}`}>{file.filename}</li>
              ))}
          </ul>
      </div>

    </div>
  );
};

export default LeftBar;
