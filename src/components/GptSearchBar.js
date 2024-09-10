// searchgptbar.js
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import lang from "../utils/languageConstant";
import generateContentWithGemini from "../utils/geminiai"; // Import Gemini function

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;

    // Check if input is empty
    if (!query) {
      alert("Please enter a movie description.");
      return;
    }

    const gptQuery = `Act as a Movie Recommendation System and suggest me a movie based on the following description: ${query}. Give me movie names separated by commas like Results: Movie Name, Movie Name, Movie Name.`;

    try {
      // Call the generateContentWithGemini function with the prompt
      const gptResults = await generateContentWithGemini(gptQuery);

      // Log the results and show them to the user (you can customize how this is displayed)
      console.log("Recommended Movies:", gptResults);
      alert(`Recommended Movies: ${gptResults}`); // Display the results
    } catch (error) {
      console.error("Error generating content with Gemini:", error);
      alert("Error: Unable to generate recommendations at the moment.");
    }
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
          type="button" // Ensure button type is "button" to avoid submitting the form
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
