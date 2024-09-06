import React, { useState } from 'react';

const VideoTitle = ({ title, overview }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="text-6xl font-bold transition-all duration-300 ease-in-out">{title}</h1>

      {/* Description only shows when hovered */}
      <p 
        className={`py-6 text-lg w-1/4 overflow-hidden transition-all duration-500 ease-in-out ${
          hovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {overview}
      </p>

      <div>
        <button className="bg-white  text-black p-4 px-12 text-xl hover:bg-opacity-80  rounded-lg">
          ▷Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          ⓘMore Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
