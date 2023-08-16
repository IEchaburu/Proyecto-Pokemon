import axios from 'axios';
import { GET_BY_ID, GET_BY_NAME, GET_POKEMONS, GET_TYPES, POST_POKEMON, FILTER_BY_ORIGIN, FILTER_BY_TYPE } from "./action.types";

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/pokemon/");

            return dispatch({
                type: GET_POKEMONS,
                payload: data,
            });
            
        } catch (error) {
            console.log(error);
        }
    }
};

export const getPokemonName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/pokemon/name?name=${name}`);

            return dispatch({
                type: GET_BY_NAME,
                payload: data
            });

        } catch (error) {
            console.log(error);
        }
    }
};

export const getPokemonID = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/pokemon/${id}`);

            return dispatch({
                type: GET_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export const postPokemon = (createPokemon) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3001/pokemon', {
                name: createPokemon.name,
                health: createPokemon.health,
                attack: createPokemon.attack,
                defense: createPokemon.defense, 
                height: createPokemon.height,
                weight: createPokemon.weight,
                speed: createPokemon.speed,
                types: createPokemon.types,
                image: createPokemon.image,
            });

            return dispatch({
                type: POST_POKEMON,
                payload: data
            })


        } catch (error) {
            console.log(error);
        }
    }
};

export const getTypes = () => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/type');

            return dispatch({
                type: GET_TYPES,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }
    }
};

export const filterOrigin = (payload) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload
    }
};

export const filterType = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}