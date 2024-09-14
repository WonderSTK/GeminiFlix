import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieInfo } from "../utils/moviesSlice";
import { format } from 'date-fns';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleMovieInfoPage = () => {
    dispatch(addMovieInfo(movie));
    document.body.style.position = 'fixed'; // Prevent scrolling when the movie info is shown
  };

  if (!movie.poster_path) return null;

  // Format release date
  const releaseDate = movie.release_date
    ? format(new Date(movie.release_date), 'MMMM dd, yyyy')
    : "Unknown Release Date";

  return (
    <div
      className="w-24 sm:w-32 md:w-40 lg:w-48 mx-2 my-2 hover:-translate-y-3 hover:scale-105 transition-all cursor-pointer"
      onClick={handleMovieInfoPage}
    >
      <div className="bg-black bg-opacity-70 rounded-lg overflow-hidden relative">
        <img
          className="object-cover w-full h-36 sm:h-48 md:h-56 lg:h-64 rounded-lg"
          src={IMG_CDN_URL + movie.poster_path}
          alt={movie.title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2">
          <p className="text-white font-semibold text-xs sm:text-sm truncate">{movie.title}</p>
          <p className="text-gray-400 text-xs sm:text-sm">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
