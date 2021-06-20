import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import DetailTemplate from "./templates/DetailTemplate";
import API_ENDPOINT from "../globals/api-endpoint";
import LikeTemplate from "./templates/LikeTemplate";
import UnlikeTemplate from "./templates/UnlikeTemplate";
import FavoriteMovieIDB from "../IDB/favoriteMovie-IDB";
import CheckDataInIndexedDB from "../IDB/checkDataInIndexedDB";
import { useState } from "react";

const Detail = () => {
    const { id } = useParams();
    const { data: detail } = useFetch(API_ENDPOINT.DETAIL(id));
    const [exist, setExist] = useState(null);

    console.log(id);

    const checkFavoriteIsExist = async (idMovie) => {
        const movie = await FavoriteMovieIDB.getMovie(idMovie);

        if (movie) {
            setExist(true);
        } else {
            setExist(false);
        }
    };

    // checkFavoriteIsExist(id);

    (async () => {
        await checkFavoriteIsExist(id);

        console.log(exist);
    })()

    // checkFavoriteIsExist(399566)
    // .then(data => {
    //     console.log(data);
    // })

    // const IDBreturnBool = async () => {
    //     const data = await checkFavoriteIsExist(id);
       
    //     setExist(data);
    //     return data;
    // };

    // (async () => {
    //     console.log(await IDBreturnBool());
    // })()

    // console.log(id);

    return (
        <>
            <div className="movie">
                {detail && <DetailTemplate movie={detail} />}
            </div>
            <div id="likeButtonContainer">
                <LikeTemplate />
                {/* <CheckDataInIndexedDB id={id} /> */}
                {/* {exist ? <h1>benar</h1> : <h1>salah</h1>} */}
            </div>
        </>
    );
};

export default Detail;
