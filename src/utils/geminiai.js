import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constant";

const genAI = new GoogleGenerativeAI({ apiKey: GEMINI_API_KEY });
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateContentWithGemini(prompt) {
  try {
    const result = await model.generateContent({ prompt });
    const response = await result.response;
    const text = response.data.text;

    // Extract movie names from the response (adjust parsing based on actual response structure)
    const movieNames = text;

    return movieNames; // Return an array of movie names
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    return []; // Return an empty array on error
  }
}

export default generateContentWithGemini;