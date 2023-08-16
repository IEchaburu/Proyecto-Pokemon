import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonName, getPokemonID } from "../../redux/actions";
import style from "./searchBar.module.css"
import { useHistory } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();

    const byNameData = useSelector(state => state.byName);
    const byIdData = useSelector(state => state.byId);

    const history = useHistory();

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();

        if (!isNaN(name)) {
            dispatch(getPokemonID(name));
        } else {
            dispatch(getPokemonName(name));
        }

        setName("");
    }

    useEffect(() => {
        if ((byNameData && byNameData.id) || (byIdData && byIdData.id)) {
            history.push(`/detail/${byNameData.id || byIdData.id}`);
        }
    }, [byNameData, byIdData, history]);

    return (
        <div className={style.container}>
            <h4>Search your Pokemon</h4>
            <input className={style.input} onChange={(event) => {handleChange(event)}} type="search" />
            <button className={style.button} onClick={(event) => {handleSearch(event)}}>Search</button>
        </div>
    )
};

export default SearchBar;