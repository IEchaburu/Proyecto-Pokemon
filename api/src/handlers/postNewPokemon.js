const createPokemon = require("../controllers/Pokemon/postPokemons");

const postNewPokemon = async (req, res) => {
    const {id, name, image, health, attack, defense, speed, height, weight, types,} = req.body;

    if (!name || !health || !attack || !defense || !speed || !height || !weight || !types) {
        return res.status(400).json({ erorr: "Faltan parametros" });
      }
  
    try {
      const newPokemon = await createPokemon(id, name, image, health, attack, defense, speed, height, weight, types);
      res
        .status(201)
        .json({
          message: "Pokemon creado correctamente",
          pokemon: newPokemon,
        });

    } catch (error) {
      res.status(400).json(error.message);
    }
  };



  module.exports = postNewPokemon;
