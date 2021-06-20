import { Link } from "react-router-dom";
import CONFIG from "../../globals/config";

const MoviesTemplate = ({ movies }) => {
    return movies.results.map((movie) => (
        <div className="movie-item" key={movie.id}>
            <div className="movie-item__header">
                <img
                    className="movie-item__header__poster"
                    src={
                        movie.backdrop_path
                            ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path
                            : "https://picsum.photos/id/666/800/450?grayscale"
                    }
                    alt={movie.title}
                />
                <div className="movie-item__header__rating">
                    <p>
                        ⭐️
                        <span className="movie-item__header__rating__score">
                            {movie.vote_average}
                        </span>
                    </p>
                </div>
            </div>
            <div className="movie-item__content">
                <h3>
                    <Link
                        style={{ textDecoration: "none", color: "red" }}
                        to={`/detail/${movie.id}`}
                    >
                        {movie.title}
                    </Link>
                </h3>
            </div>
        </div>
    ));
};

export default MoviesTemplate;
