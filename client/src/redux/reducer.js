import { FILTER_BY_ORIGIN, FILTER_BY_TYPE, GET_BY_ID, GET_BY_NAME, GET_POKEMONS, GET_TYPES, POST_POKEMON } from "./action.types";

const initialState = {
    pokemons: [],
    types: [],
    biId: {},
    byName: {},
    createdPkn: {},
    pokemonCopy: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            }
        case GET_BY_NAME:
            return {
                ...state,
                byName: action.payload,
            }
        case GET_BY_ID:
            return {
                ...state,
                byId: action.payload,
            }
        case POST_POKEMON:
            return {
                ...state,
                createdPkn: action.payload,
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            }
        case FILTER_BY_ORIGIN:
            let filteredPokemons = [...state.pokemons];
            if (action.payload === 'DB') {
                filteredPokemons = state.pokemonCopy.filter((pokemon) => isNaN(pokemon.id));
            } else if (action.payload === 'API') {
                filteredPokemons = state.pokemonCopy.filter((pokemon) => !isNaN(pokemon.id));
            } else {
                filteredPokemons = state.pokemonCopy;
            }
            return {
                ...state,
                pokemons: filteredPokemons
            }
        case FILTER_BY_TYPE:
            let filteredType = [...state.pokemons];
            filteredType = state.pokemonCopy.filter((pokemon) => {
                if (Array.isArray(pokemon.types)) {
                    if (pokemon.types.some((type) => type.name === action.payload)) {
                        return true;
                    }
                    if (pokemon.types.includes(action.payload)) {
                        return true;
                    }
                }
                return false;
            })
            return {
                ...state,
                pokemons: filteredType
            }
        default:
            return state;
    }
}


export default rootReducer;