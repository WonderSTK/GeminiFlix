import React from 'react'
import { useSelector } from 'react-redux';
import lang from "../utils/languageConstant"
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder} 
          className=" p-4 m-4 col-span-9 rounded-lg border border-gray-300"
        />
        <button className="col-span-3 bg-blue-500 text-white m-4 py-2 px-4 rounded-lg ml-2">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar