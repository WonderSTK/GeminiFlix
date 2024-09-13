import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideo: null,
        movieInfo: { info: null, page: false },
        movieInfoTrailer: null,
        movieInfoTrailerPage: false,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMovieInfo: (state, action) => {
            state.movieInfo.info = action.payload;
            state.movieInfo.page = true;
        },
        toggleMovieInfo: (state) => {
            state.movieInfo.page = false;
            state.movieInfo.info = null;
        },
        addMovieInfoTrailer: (state, action) => {
            state.movieInfoTrailer = action.payload;
        },
        setMovieInfoTrailerPage: (state, action) => {
            state.movieInfoTrailerPage = action.payload;
        },
    },
});

export const { 
    addNowPlayingMovies, 
    addPopularMovies, 
    addTopRatedMovies, 
    addUpComingMovies, 
    addTrailerVideo, 
    addMovieInfo, 
    toggleMovieInfo, 
    addMovieInfoTrailer, 
    setMovieInfoTrailerPage 
} = moviesSlice.actions;

export default moviesSlice.reducer;