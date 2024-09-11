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
  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=true&language=en-US&page=1", API_OPTIONS);
    const response = await data.json();
    return response.results;
  }
  
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

  // Gemini API call
  const gemini = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    const prompt = "Act as a movie recommendation system and suggest some movies for the query " + searchText.current.value +
      ". Only give me 5 movie names, comma-separated like the example given ahead. Example: The Dark Knight, Inception, Interstellar, The Matrix, The Shawshank Redemption";
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const moviesArray = text.split(",").map((movie) => movie.trim());
    return moviesArray;
  };

  const handleGptSearchClick = async () => {
    const movies = await gemini();
    console.log(movies);
    const data = movies.map(movie => searchMovieTMDB(movie));
    const tmdbMovies = await Promise.all(data);
    console.log(tmdbMovies);

    dispatch(addGptMovieResult({moviesNames: movies, movieResults: tmdbMovies}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded-lg border border-gray-300"
        />
        <button
          type="button"
          className="col-span-3 bg-blue-500 text-white m-4 py-2 px-4 rounded-lg ml-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
