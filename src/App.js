import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LikedMovies from "./components/LikedMovies";
import NowPlaying from "./components/NowPlaying";
import Upcoming from "./components/Upcoming";
import Detail from "./components/Detail";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/">
                        <NowPlaying />
                    </Route>
                    <Route path="/upcoming">
                        <Upcoming />
                    </Route>
                    <Route path="/like">
                        <LikedMovies />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
