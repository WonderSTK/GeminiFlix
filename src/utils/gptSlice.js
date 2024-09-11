import { createSlice } from "@reduxjs/toolkit";

 

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        moviesNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch; 
        },
        addGptMovieResult: (state, action) => {
            const {moviesNames, movieResults} = action.payload;
            state.movieResults = movieResults;
            state.moviesNames = moviesNames;
        }

    },
})


export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default  gptSlice.reducer;