import { filterOrigin, filterType, getAllPokemons, getTypes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";


const Filter = ({handlerPage}) => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    const handleOrigin = (event) => {
        dispatch(filterOrigin(event.target.value));
    }

    const handleType = (event) => {
        event.preventDefault();
        dispatch(filterType(event.target.value))
    }

    return (
        <div>
            <div>
                <span>Filter By:</span>
                <select onChange={(event) => handleOrigin(event)}>
                    <option value='ALL'>All</option>
                    <option value='DB'>Data Base</option>
                    <option value='API'>API</option>
                </select>
            </div>
            <div>
                <span>Filter By Type:</span>
                <select onChange={(event) => handleType(event)}>
                    {
                        types.map((type) => {
                            return <option key={type} value={type}>{type}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default Filter;