import React, { useState } from 'react';

const VideoTitle = ({ title, overview }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 lg:px-24 bg-gradient-to-r from-black text-white transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="text-4xl md:text-6xl font-bold transition-all duration-300 ease-in-out">{title}</h1>

      {/* Description only shows when hovered */}
      <p
        className={`py-6 text-sm md:text-lg w-full md:w-3/4 lg:w-1/2 overflow-hidden transition-all duration-500 ease-in-out ${
          hovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {overview}
      </p>

      <div className="flex mt-4">
        <button className="bg-white text-black p-2 px-6 text-sm md:text-xl hover:bg-opacity-80 rounded-lg">
          ▷ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-6 text-sm md:text-xl bg-opacity-50 rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
