import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const MovieList = ({ title, movies }) => {
  const sliderRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -500, 
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 500, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative px-4 md:px-6 lg:px-8 ml-4">
      <h2 className="text-2xl md:text-3xl text-white py-4">{title}</h2>

      {/* Left Scroll Button - Only visible on md and larger devices */}
      <button
        className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 z-10"
        onClick={scrollLeft}
        aria-label="Scroll Left"
      >
        <FiChevronLeft size={30} /> {/* Left arrow icon */}
      </button>

      {/* Movie Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll md:overflow-x-hidden scrollbar-hide scroll-smooth"
      >
        <div className="flex flex-nowrap space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Right Scroll Button - Only visible on md and larger devices */}
      <button
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 z-10"
        onClick={scrollRight}
        aria-label="Scroll Right"
      >
        <FiChevronRight size={30} /> {/* Right arrow icon */}
      </button>
    </div>
  );
};

export default MovieList;
