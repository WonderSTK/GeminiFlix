import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import { toggleMovieInfo, setMovieInfoTrailerPage } from "../utils/moviesSlice";
import useMovieInfoTrailer from "../hooks/useMovieInfoTrailer";

const MovieInfo = () => {
    const { info } = useSelector((store) => store?.movies?.movieInfo);
    const movieInfoTrailer = useSelector((store) => store.movies?.movieInfoTrailer);
    const movieInfoTrailerPage = useSelector((store) => store.movies?.movieInfoTrailerPage);
    const dispatch = useDispatch();

    const handleMovieInfoPage = () => {
        dispatch(toggleMovieInfo());
        dispatch(setMovieInfoTrailerPage(false));
        document.body.style.position = '';
    };

    useMovieInfoTrailer(info?.id);

    const handleMovieInfoVideo = () => {
        dispatch(setMovieInfoTrailerPage(true));
    };

    return (
        <div className="relative bg-black mx-auto min-h-[50%] w-[95%] sm:w-[80%] md:w-1/2 lg:w-1/3 rounded-lg aspect-video border border-gray-400 overflow-y-scroll">
            <i onClick={handleMovieInfoPage} className="fixed top-10 right-5 text-3xl cursor-pointer">
                ✖️
            </i>
            {!movieInfoTrailerPage ? (
                <div className="p-4">
                    <h1 className="text-2xl font-bold my-2">{info?.title}</h1>
                    <div className="flex flex-col sm:flex-row">
                        <img
                            className="w-36 h-56 rounded-lg"
                            src={IMG_CDN_URL + info?.poster_path}
                            alt={info?.title}
                        />
                        <div className="ml-4">
                            <p><b>Language:</b> {info?.original_language}</p>
                            <p><b>Popularity:</b> {info?.popularity}</p>
                            <p><b>Release Date:</b> {info?.release_date}</p>
                            <p><b>Overview:</b> {info?.overview}</p>
                        </div>
                    </div>
                    <button className="mt-4 p-2 bg-white text-black rounded-md" onClick={handleMovieInfoVideo}>
                        Play Trailer
                    </button>
                </div>
            ) : (
                <iframe
                    className="w-full h-full"
                    src={"https://www.youtube.com/embed/" + movieInfoTrailer?.key + "?autoplay=1"}
                    title="Movie Trailer"
                />
            )}
        </div>
    );
};

export default MovieInfo;
