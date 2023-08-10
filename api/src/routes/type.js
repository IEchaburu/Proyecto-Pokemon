const { Router } = require("express");
const allPokemonTypes = require("../handlers/pokemonTypes");

const type_router = Router();

type_router.get('/', allPokemonTypes);

module.exports = type_router;