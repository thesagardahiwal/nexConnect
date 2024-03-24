import React from 'react'
import { back } from "../assets/icons/index.js"

function BackHandle({active}) {
  return (
    <div>
          <button
              className='border bg-slate-200 hover:bg-slate-300 text-white rounded-md m-1 p-1'
              onClick={() => active((prev) => false)}
          >
              <img src={back} width={25} alt="" />
          </button>
    </div>
  )
}

export default BackHandle