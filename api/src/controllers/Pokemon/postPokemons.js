const { Pokemon, Type } = require("../../db");
//const defaultImage = require('../../utility')

let createPokemon = async (id, name, image, health, attack, defense, speed, height, weight, types) => {
  
  const findPokemon = await Pokemon.findOne({ where: { name: name } });
  
  if (findPokemon) {
    
    throw new Error("You have to create a new pokemon");

  } else {
    const newPokemon = await Pokemon.create({id, name, health, attack, defense, 
      height, weight, speed, types, image: image ? image : defaultImage,});
    
    const typeDb = await Type.findAll({
      where: {
        name: types,
      },
    });
    
    await newPokemon.addType(typeDb);
    //tipo = typeDb.map((elem) => elem.name);

    //console.log(newPokemon);
    console.log(typeDb, 'este es typeDb');

    return `The pokemon with id: ${newPokemon.id}, has been created`;
  }
};

module.exports = createPokemon;