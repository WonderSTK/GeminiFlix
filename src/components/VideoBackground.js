import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo); 
  
  useMovieTailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0&showinfo=0&modestbranding=1&rel=0&fs=0`}
        title="YouTube video player" 
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
