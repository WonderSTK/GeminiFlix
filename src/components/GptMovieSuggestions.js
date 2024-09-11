import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const {movieResults, moviesNames} = useSelector(store => store.gpt)
  if(!moviesNames) return null
   
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {moviesNames.map((moviesNames, index) => (
          <MovieList 
          key={moviesNames}
          title={moviesNames} 
          movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestions