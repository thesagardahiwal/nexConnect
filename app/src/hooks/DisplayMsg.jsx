import React, { useEffect } from 'react'

function DisplayMsg(props) {
    const { message, setMessage } = props;

    setTimeout(() => setMessage(''), 3000);

  return (
    <div className='text-red-400 bg-slate-100 w-fit h-fit rounded-md flex px-2 p-1 justify-center items-center'>
        <h1>{message}</h1>
    </div>
  )
}

export default DisplayMsg
