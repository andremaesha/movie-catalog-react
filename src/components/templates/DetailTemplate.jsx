import CONFIG from "../../globals/config";

const DetailTemplate = ({ movie }) => {
    return (
        <div>
            <h2 className="movie__title">{movie.title}</h2>
            <img
                src={CONFIG.BASE_IMAGE_URL + movie.poster_path}
                alt={movie.title}
                className="movie__poster"
            />
            <div className="movie__info">
                <h3>Information</h3>
                <h4>Tagline</h4>
                <p>{movie.tagline}</p>
                <h4>Release Date</h4>
                <p>{movie.release_date}</p>
                <h4>Duration</h4>
                <p>{movie.runtime}</p>
                <h4>Rating</h4>
                <p>{movie.vote_average}</p>
            </div>
            <div className="movie__overview">
                <h3>Overview</h3>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
};

export default DetailTemplate;
