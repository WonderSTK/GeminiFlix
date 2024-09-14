import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import Shimmer from './Shimmer';

const GptMovieSuggestions = () => {
  const { movieResults, moviesNames, isLoading } = useSelector((store) => store.gpt);

  if (!moviesNames && !isLoading) return null;

  return (
    <div className="w-full max-w-4xl px-4 md:px-6 lg:px-8 mx-auto mt-6 bg-black text-white bg-opacity-90 rounded-lg shadow-lg  overflow-y-auto flex-grow">
      <div className="flex flex-col gap-4 p-4">
        {/* Show Shimmer Effect if data is loading */}
        {isLoading ? (
          <Shimmer />
        ) : (
          moviesNames.map((movieName, index) => (
            <MovieList 
              key={movieName} 
              title={movieName} 
              movies={movieResults[index]} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
