import useFetch from "../useFetch";
import NowPlayingTemplate from "./templates/MoviesTemplate";
import API_CONFIG from "../globals/api-endpoint";

const NowPlaying = () => {
    const {data: movies, isPending, errorMessage} = useFetch(API_CONFIG.NOW_PLAYING);

    return (
        <div className="content">
            <h2 className="content__heading">Now Playing in Cinema</h2>
            <div className="movies">
                {movies && <NowPlayingTemplate movies={movies} />}
            </div>
        </div>
    )
};

export default NowPlaying;
