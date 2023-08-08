const { Router } = require("express");
const getAllPokemons = require("../handlers/allPokemons");

const pokemon_router = Router();

pokemon_router.get('/', getAllPokemons);

module.exports = pokemon_router;

