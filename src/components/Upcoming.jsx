import useFetch from "../useFetch";
import API_ENDPOINT from "../globals/api-endpoint";
import UpcomingTemplate from "./templates/MoviesTemplate";

const Upcoming = () => {
    const {
        data: upcoming,
        isPending,
        errorMessage,
    } = useFetch(API_ENDPOINT.UPCOMING);

    return (
        <div className="content">
            <h2 className="content__heading">Upcoming in Cinema</h2>
            <div className="movies">
                {errorMessage && <h1>{errorMessage}</h1>}
                {isPending && <h1>Loading...</h1>}
                {upcoming && <UpcomingTemplate movies={upcoming} />}
            </div>
        </div>
    );
};

export default Upcoming;
