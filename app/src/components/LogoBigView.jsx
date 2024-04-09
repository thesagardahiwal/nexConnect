import React from 'react'
import { roomsPic } from "../assets/icons/index.js";

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
            <div className='dummy'>
              <h1>Hello students, have you all joined this room?</h1>
              <p className='text-black text-xs'>{getTime()}</p>
            </div>
            <div className='dummy'>
              <h1>
                <img src={roomsPic} className='contain rounded-md overflow-hidden h-[200px]' alt="" />
                <p className='text-black text-xs'>{getTime()}</p>
              </h1>
            </div>

            <div className='dummy-v2'>
              <h1 >Can anyone please send the code for today's practical?</h1>
              <div className='text-white w-[5.5rem] text-left text-xs'>{getTime()}</div>
            </div>
            <div className='dummy-v2'>
              <h1>By the way, what practical is today? 😃</h1>
              <p className='text-white text-xs'>{getTime()}</p>
            </div>
            <div className='dummy'>
              <h1>Who is this gossiping?</h1>
              <p className='text-black text-xs'>{getTime()}</p>
            </div>

          </div>


      </div>
  )
}

export default LogoBigView