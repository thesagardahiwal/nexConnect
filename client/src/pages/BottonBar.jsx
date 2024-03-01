import React, { useState } from 'react';


const BottomBar = () => {

  const [ message, setMessage ] = useState('');


  const handleSubmit = () => {

  }

  return (
    <div className="p-4 sm:w-5/6 w-full bg-gray-200 fixed bottom-0 h-[80px]">
      {/* Input, Media send button, Send message button */}

      <div className='w-full flex justify-between items-center h-full'>
        <div className='flex gap-2'>
          <button className='border p-1 bg-red-500 rounded-md w-8 h-8'></button>
          <button className='border p-1 bg-blue-500 rounded-md w-auto text-white h-8'>FileShare</button>
        </div>
        <div className=''>
          <form className='flex gap-2' onSubmit={handleSubmit}>
            <input className='p-1 rounded-md' type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder='message'/>
            <button type='submit' className='border bg-green-400 rounded-md p-1'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
