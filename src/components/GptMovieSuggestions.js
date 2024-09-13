import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import Shimmer from './Shimmer';

const GptMovieSuggestions = () => {
  const { movieResults, moviesNames, isLoading } = useSelector((store) => store.gpt);
  
  if (!moviesNames && !isLoading) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {/* Show Shimmer Effect if data is loading */}
        {isLoading ? (
          <Shimmer />
        ) : (
          moviesNames.map((moviesNames, index) => (
            <MovieList 
              key={moviesNames} 
              title={moviesNames} 
              movies={movieResults[index]} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;