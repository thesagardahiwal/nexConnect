import React from 'react'
import { back } from "../assets/icons/index.js"

function BackHandle({active}) {
  
  return (
    <div
      onClick={() => {
        active((prev) => false)
      }}
      className='z-50'
    >
      <button
        className='border bg-slate-100 hover:bg-slate-200 text-white rounded-md m-1 p-1'

      >
        <img src={back} width={25} alt="" />
      </button>
    </div>
  )
}

export default BackHandle