import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieInfoTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieInfoTrailer = (videoId) => {
    const dispatch = useDispatch();

    const getVideo = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
                API_OPTIONS
            );
            const data = await response.json();
            const trailer = data.results.find((video) => video.type === "Trailer");
            dispatch(addMovieInfoTrailer(trailer || data.results[0]));
        } catch (error) {
            console.error("Failed to fetch movie trailer", error);
        }
    };

    useEffect(() => {
        if (videoId) getVideo();
    }, [videoId]);
};

export default useMovieInfoTrailer;
