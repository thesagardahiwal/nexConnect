import React from 'react'

function JoinRoomButton({Active, IDE}) {
    const handleJoinButton = () => {
        Active(true);
    }
  return (
    <div className='flex w-full justify-center'>
        <button 
          className={`rounded-md border font-bold w-full text-white ${IDE === "Join" ? "bg-blue-700" : "bg-gradient-to-r from-purple-500 to-red-500"}  py-3 m-1`} 
          onClick={handleJoinButton}>
            {IDE === "Join" ? "Join Room" : "Create Room"}
        </button> 
        <br /><br />
    </div>
  )
}

export default JoinRoomButton