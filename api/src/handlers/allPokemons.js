const allPokemons = require('../controllers/Pokemon/getAllPokemons');
const getPokemonByName = require("../controllers/Pokemon/getPokemonByName");


const getAllPokemons = async (req, res) => {
    // let { name } = req.query;
    // if (name) {
    //     let pokeName = await getPokemonByName(name.toLocaleLowerCase());
    //     if(pokeName.error) throw new Error(pokeName.error);
        
    //     res.status(200).json(pokeName);
    // }
        
        try {
            const todosPokemons = await allPokemons();
    
            res.status(200).json(todosPokemons);
            
        } catch (error){
            res.status(400).json({error: error.message});
        }
 
    
}

// const byName = async (req, res) => {
//     let { name } = req.query;
//     if (name) {
//         let pokeName = await getPokemonByName(name.toLocaleLowerCase());
//         if(pokeName.error) throw new Error(pokeName.error);
        
//         res.status(200).json(pokeName);
//     }
// }


module.exports = getAllPokemons;