import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'

const VideoBackground = () => {
 const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', API_OPTIONS)
    const json = await data.json();
    console.log(json);

    const trailer = json.results.filter((video) => video.type === "Trailer");
    console.log(trailer);
 }
  useEffect(() => {
    getMovieVideos();
  },[]);
  
  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground