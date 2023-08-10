const getPokemonsById = require("../controllers/Pokemon/getPokemonsByID");


const pokemonById = async (req, res) => {
    const { id } =req.params;
    const origin = isNaN(id) ? 'db' : 'pokeapi';

    try {
        const pokemonId = await getPokemonsById(id, origin);

        if (pokemonId.error) throw new Error(pokemonId.error);

        res.status(200).json(pokemonId);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = pokemonById;