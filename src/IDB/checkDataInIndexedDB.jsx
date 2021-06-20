import FavoriteMovieIDB from "../IDB/favoriteMovie-IDB";

const CheckDataInIndexedDB = ({ id }) => {
    const checkFavoriteIsExist = async (id) => {
        const movie = await FavoriteMovieIDB.getMovie(id);

        return !!movie;
    };

    return (
        <div>
            <h1>anjing lu tot</h1>
        </div>
    );
};

export default CheckDataInIndexedDB;
