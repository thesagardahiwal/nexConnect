import React from 'react'
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import Diversity3Icon from '@mui/icons-material/Diversity3';

function JoinRoomButton({Active, IDE}) {
    const handleJoinButton = () => {
        Active(true);
    }
  return (
    <div className='flex w-full justify-center'>
        <button 
          className={`rounded-md p-4 flex font-bold w-full text-white ${IDE === "Join" ? "bg-blue-700" : "bg-gradient-to-r from-purple-500 to-red-500"}  py-3 m-1`} 
          onClick={handleJoinButton}>
        {/* `${IDE === "Join" ?}` */}
          <div className='w-full flex justify-start'>{IDE === "Join" ? "Join Room" : "Create Room"}</div>
          <div>{IDE === "Join" ? (<JoinInnerIcon />) : (<Diversity3Icon />)}</div>
        </button> 
        <br /><br />
    </div>
  )
}

export default JoinRoomButton