const axios = require('axios');
const { Pokemon, Type } = require("../../db");

// OBTENEMOS LOS POKEMONS DE LA API
const getApiPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20`;
    const resultApi = await axios.get(url);
    
    const apiPokemons = resultApi.data.results;
    
    for (const pokemon of apiPokemons) {
      const pokemonData = await axios.get(pokemon.url);
      delete pokemon.url;
      pokemon.id = pokemonData.data.id;
      pokemon.height = pokemonData.data.height;
      pokemon.weight = pokemonData.data.weight;
      pokemon.health = pokemonData.data.stats[0].base_stat;
      pokemon.attack = pokemonData.data.stats[1].base_stat;
      pokemon.defense = pokemonData.data.stats[2].base_stat;
      pokemon.speed = pokemonData.data.stats[5].base_stat;
      pokemon.types = pokemonData.data.types.map((pkmtype) => pkmtype.type.name);
      pokemon.image = pokemonData.data.sprites.other["official-artwork"].front_default;
      pokemon.createdInDb = false;
    }
  
    return apiPokemons;
  };

  // OBTENEMOS LOS POKEMONS DE LA BASE DE DATOS

const getDbPokemons = async () => {
  const dbPokemons = await Pokemon.findAll({
    include: {
        model: Type,
        attributes: ["name"],
        through: {
          types: [],
        },
      },
    })

  return dbPokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      health: pokemon.health,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      image: pokemon.image,
      types: pokemon.types.map((type) => type.name),
      createdInDb: pokemon.created,
    }
  })
}

// ESTA FUNCION OBTIENE LOS POKEMONES DE LA API Y DE LA BASE DE DATOS

const allPokemons = async () => {
  const Api_Pokemons = await getApiPokemons();
  const Db_Pokemons = await getDbPokemons();

  const everyPokemon = Db_Pokemons ? [...Api_Pokemons, ...Db_Pokemons] : Api_Pokemons;

  return everyPokemon;
}

module.exports = allPokemons;
