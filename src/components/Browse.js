import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import MovieInfo from './MovieInfo';  // Import MovieInfo for displaying movie details

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const { page } = useSelector((store) => store.movies?.movieInfo);  // Get movie info state to check if a movie is selected

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div className="bg-black min-h-screen min-w-screen text-white">
      <Header/>
      {showGptSearch ? (
        <GptSearch/>
      ) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
      
      {page && (  // Conditionally render MovieInfo if a movie is selected
        <div className="fixed top-0 backdrop-blur-sm p-2 w-full h-full flex items-center justify-center z-50">
          <MovieInfo />
        </div>
      )}
    </div>
  )
}

export default Browse;

//