import React from 'react'
import { logo } from "../assets/icons/index.js";

function LogoBigView() {
  return (
      <div
          className='flex text-white w-full h-full bg-gradient-to-r from-indigo-500 to-pink-500 justify-center items-center'
      >
          <div className='w-[50%] flex justify-center items-center'>
              <img src={logo} width={300} alt="" />
          </div>
          <div className='flex-1'>
              <h1 className='text-[5vh] w-full font-extrabold'>
                  NexConnect
              </h1>
              <h1 className='font-normal text-sm w-full flex items-center justify-center'>- One platform to connect</h1>
          </div>
      </div>
  )
}

export default LogoBigView