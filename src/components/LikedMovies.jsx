import { useState } from "react";
import FavoriteMovieIDB from "../IDB/favoriteMovie-IDB";
import {useParams} from "react-router-dom"
import detailData from "../globals/tryData";

const LikedMovies = () => {
    const {id} = useParams();

    const [isMovieExist, setIsMovieExist] = useState(null);

    FavoriteMovieIDB.putMovie(detailData);

    const handleRenderBotton = async (id) => {
        const movie = await FavoriteMovieIDB.getMovie(id);

        return !!movie;
    }

    return (
        <div>
            {/* {handleRenderBotton(399566) ? "ada" : "tidak ada"} */}
            lie page
        </div>
    );
};

export default LikedMovies;
