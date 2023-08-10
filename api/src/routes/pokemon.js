const { Router } = require("express");
const getAllPokemons = require("../handlers/allPokemons");
const pokemonById = require("../handlers/pokemonById");
const byName = require("../handlers/byName");
const postNewPokemon = require("../handlers/postNewPokemon");



const pokemon_router = Router();

pokemon_router.get('/', getAllPokemons);

pokemon_router.get('/name', byName);

pokemon_router.post('/', postNewPokemon);

pokemon_router.get('/:id', pokemonById);

module.exports = pokemon_router;

