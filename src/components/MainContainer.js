import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { IMG_CDN_URL } from '../utils/constant'; // Ensure this path is correct

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id, poster_path } = mainMovie;

  return (
    <div className="relative w-full h-screen">
      <VideoBackground 
        movieId={id} 
        poster={poster_path} // Pass the poster path here
      />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
