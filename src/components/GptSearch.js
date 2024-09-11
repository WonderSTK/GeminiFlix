import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {BACKGROUND_IMG} from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch