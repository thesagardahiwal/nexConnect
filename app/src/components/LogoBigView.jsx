import React from 'react'
import { logo, Lucie, roomsPic, Sagar } from "../assets/icons/index.js";

function LogoBigView() {

  const getTime = () => {
    const currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let meridiem = "AM";
        if (hours > 12) {
          hours -= 12;
          meridiem = "PM";
        } else if (hours === 0) {
          hours = 12;
        }
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
        const time = `${hours}:${minutes} ${meridiem}`;
        return time;
  }

  return (
      <div
          className='text-slate-100 p-[7vh] w-full h-full flex bg-transperent'
      >
          <div className='flex items-center w-1/2 justify-center'>
            <div>
              <h1 className='text-6xl hover:-rotate-6 hover:skew-y-3 transition-all tracking-widest antialiased md:subpixel-antialiased font-medium'>
                Message <br /> Privately
              </h1>
              <br />
              <p className='line-clamp-3 transition-all font-normal'>
                Simple, reliable, private messaging and <br />
                sharing screen for free*, available all over the world.
              </p>
            </div>
          </div>
          <div className='w-1/2 grid'>
            <div className='bg-slate-100 -skew-y-2 hover:skew-y-0 drop-shadow-md font-normal items-end gap-2 h-fit flex w-fit text-black rounded-r-2xl rounded-tl-2xl p-2'>
              <h1 className=''>Hello students, have you all joined this room?</h1>
              <p className='text-black text-xs'>{getTime()}</p>
            </div>
            <div className='bg-slate-100 hover:skew-y-0 -skew-y-2 transition-all drop-shadow-md items-center gap-2 h-fit flex w-fit text-black rounded-r-2xl rounded-tl-2xl p-2'>
              <h1>
                <img src={roomsPic} className='contain rounded-md overflow-hidden h-[200px]' alt="" />
                <p className='text-black text-xs'>{getTime()}</p>
              </h1>
            </div>

            <div className='bg-green-300 skew-y-1 hover:skew-y-0 drop-shadow-md justify-self-end h-fit items-end gap-2 flex w-fit text-black rounded-l-2xl rounded-tr-2xl p-2'>
              <h1 className=''>Can anyone please send the code for today's practical?</h1>
              <div className='text-black w-[5.5rem] text-left text-xs'>{getTime()}</div>
            </div>
            <div className='bg-green-300 skew-y-1 hover:skew-y-0 drop-shadow-md justify-self-end h-fit items-end gap-2 flex w-fit text-black rounded-l-2xl rounded-tr-2xl p-2'>
              <h1 className=''>By the way, what practical is today? 😃</h1>
              <p className='text-black text-xs'>{getTime()}</p>
            </div>
            <div className='bg-slate-100 -skew-y-1 hover:skew-y-0 drop-shadow-md font-normal items-end gap-2 h-fit flex w-fit text-black rounded-r-2xl rounded-tl-2xl p-2'>
              <h1 className=''>Who is this gossiping?</h1>
              <p className='text-black text-xs'>{getTime()}</p>
            </div>

          </div>


      </div>
  )
}

export default LogoBigView