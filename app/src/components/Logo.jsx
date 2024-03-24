import React from 'react'
import { loader, join, logo } from "../assets/icons/index.js";

function Logo() {
  return (
      <div className='w-full mt-10 mb-[50px] flex flex-col items-center justify-center'>
          <img src={logo} width={150} alt="" />
          <h1 className='text-white font-semibold mt-2 text-3xl'>NexConnect</h1>
      </div>
  )
}

export default Logo