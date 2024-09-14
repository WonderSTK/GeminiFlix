import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constant';
import useMovieTailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId, poster }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  // Custom hook to fetch the movie trailer
  useMovieTailer(movieId);

  return (
    <div className="relative w-screen h-screen">
      {/* Video background for larger screens */}
      <iframe
        className="w-screen h-screen hidden md:block"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0&showinfo=0&modestbranding=1&rel=0&fs=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      {/* Poster image for mobile devices */}
      <img
        className="w-screen h-screen object-cover absolute inset-0 md:hidden"
        src={`${IMG_CDN_URL}${poster}`}
        alt="Movie Poster"
      />
    </div>
  );
};

export default VideoBackground;
