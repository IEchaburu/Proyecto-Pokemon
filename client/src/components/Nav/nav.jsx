import { Link } from "react-router-dom";
import style from "./nav.module.css";
import SearchBar from "../Search Bar/searchBar";

const Nav = () => {
    return (
        <div className={style.container}>
            <div className={style.botones}>
                <Link to="/home">Home</Link>
            </div>

            <div className={style.botones}>
                <Link to="/create">Create</Link>
            </div>

            <SearchBar/>

            <div className={style.botones}>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Nav;