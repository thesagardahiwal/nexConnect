import React from 'react';
import { logo } from '../assets/icons';

function Logo() {
  return (
    <div className="w-full mt-10 mb-12 flex flex-col items-center justify-center">
      <img src={logo} alt="NexConnect Logo" width={150} className="object-contain" />
      <h1 className="text-white font-semibold mt-2 text-3xl">NexConnect</h1>
    </div>
  );
}

export default Logo;
