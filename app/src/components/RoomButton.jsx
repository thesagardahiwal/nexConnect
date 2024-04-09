import React from 'react'
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import Diversity3Icon from '@mui/icons-material/Diversity3';

function JoinRoomButton({Active, IDE}) {
    const handleJoinButton = () => {
        Active(true);
    }
  return (
    <div className='flex w-full mb-3 items-center justify-center'>
        <button 
          className={`rounded-md p-4 hover:rotate-0 hover:skew-y-0 items-center ${IDE === "Join" ? "rounded-tr-3xl hover:rounded-tl-3xl rounded-bl-3xl hover:rounded-br-3xl -skew-y-1" : "rounded-tl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-bl-3xl skew-y-1"} drop-shadow-md flex font-bold w-full transition-all text-white ${IDE === "Join" ? " bg-blue-600" : "bg-gradient-to-r from-purple-600 to-red-500"}  py-3 m-1`} 
          onClick={handleJoinButton}>
        {/* `${IDE === "Join" ?}` */}
          <div className='w-full tracking-widest font-medium flex justify-start'>{IDE === "Join" ? "Join Room" : "Create Room"}</div>
          <div className={`p-1 hover:skew-y-3 rounded-sm ${IDE === "Join" ? "rounded-tr-xl rounded-bl-xl rotate-6" : "rounded-tl-xl rounded-br-xl -rotate-6"} hover:rotate-0`}>
            {IDE === "Join" ? (<JoinInnerIcon />) : (<Diversity3Icon />)}
          </div>
        </button> 
        <br /><br />
    </div>
  )
}

export default JoinRoomButton