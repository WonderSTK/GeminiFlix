import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from "../utils/languageConstant";
import { API_OPTIONS, GEMINI_API_KEY } from '../utils/constant';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&=true&language=en-US&page=1`, 
      API_OPTIONS
    );
    const response = await data.json();
    return response.results;
  };
  
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  // Gemini API call
  const gemini = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = 
      `Act as a movie recommendation system and suggest some movies for the query "${searchText.current.value}". 
      Only give me 5 movie names, comma-separated like the example given ahead. 
      Example: The Dark Knight, Inception, Interstellar, The Matrix, The Shawshank Redemption`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const moviesArray = text.split(",").map((movie) => movie.trim());
    return moviesArray;
  };

  const handleGptSearchClick = async () => {
    const movies = await gemini();
    const data = movies.map(movie => searchMovieTMDB(movie));
    const tmdbMovies = await Promise.all(data);

    dispatch(addGptMovieResult({ moviesNames: movies, movieResults: tmdbMovies }));
  };

  return (
    <div className="mt-20 pt-20 md:pt-10 flex justify-center w-full"> {/* Added pt-20 for mobile top margin */}
      <form className="w-full max-w-4xl bg-black grid grid-cols-12 gap-2 p-4" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-9 p-3 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="button"
          className="col-span-3 bg-blue-500 text-white py-3 rounded-lg transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
