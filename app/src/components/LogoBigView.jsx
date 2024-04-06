import React from 'react'
import { logo } from "../assets/icons/index.js";

function LogoBigView() {
  return (
      <div
          className='text-slate-100 p-5 w-full h-full flex justify-center bg-transperent'
      >
          <div className='absolute tracking-wide top-20 flex justify-center'>
              <h1 className='text-4xl w-[80%] font-extrabold'>
                NexConnect offers a seamless and intuitive platform for sharing
                &nbsp;
                <span className='gr-text'> media files</span>,
                <span className='gr-text'>chats</span> and
                <span className='gr-text'>screen</span>
                &nbsp;
                sharing within virtual rooms.
              </h1>
          </div>

      </div>
  )
}

export default LogoBigView