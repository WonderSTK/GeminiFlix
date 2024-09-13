import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {   addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpComingMovies = () => {
    const dispatch = useDispatch();

    const upComingMovies = useSelector(
      (store) => store.movies.upcomingMovies
    );

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
     const json = await data.json();
     dispatch(addUpComingMovies(json.results));
  }

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
}

export default useUpComingMovies;