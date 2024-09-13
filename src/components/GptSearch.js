import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG } from '../utils/constant';

const GptSearch = () => {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen w-full">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>

      {/* GPT Search Bar */}
      <div className="w-full md:w-3/4 lg:w-2/3 px-4 mt-10">
        <GptSearchBar />
      </div>

      {/* GPT Movie Suggestions */}
      <div className="w-full md:w-3/4 lg:w-2/3 px-4 mt-6">
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
