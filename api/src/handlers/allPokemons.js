const allPokemons = require('../controllers/Pokemon/getAllPokemons');

const getAllPokemons = async (req, res) => {
    try {
        const todosPokemons = await allPokemons();

        res.status(200).json(todosPokemons);
        
    } catch (error){
        res.status(400).json({error: error.message});
    }
}


module.exports = getAllPokemons;