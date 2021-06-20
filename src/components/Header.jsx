import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(true);

    const closeClick = () => setOpen(false);

    return (
        <header className="app-bar">
            <div className="app-bar__menu">
                {open ? (
                    <button onClick={closeClick}>
                        <i className="material-icons">close</i>
                    </button>
                ) : (
                    <button onClick={handleClick}>
                        <i className="material-icons">menu</i>
                    </button>
                )}
            </div>
            <div className="app-bar__brand">
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <h1>Movie Catalogue</h1>
                </Link>
            </div>
            <nav
                className={
                    open ? "app-bar__navigation open" : "app-bar__navigation"
                }
            >
                <ul>
                    <li>
                        <Link onClick={closeClick} to="/">
                            Now Playing
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeClick} to="/upcoming">
                            Upcoming
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeClick} to="/like">
                            Like Movies
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
