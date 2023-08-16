const { Pokemon, Type, Op } = require("../../db");
const axios = require("axios");

const getPokemonByName = async (name) => {
    const pokeNameDb = await Pokemon.findOne({
        where: {
            name: { [Op.iLike]: name }  // RETIRAR % SI QUEREMOS UNA BUSQUEDA EXACTA DEL NOMBRE `%${name}%`
        },
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                types: []
            },
        },
    })

    if (pokeNameDb) {
        return {
          id: pokeNameDb.id,
          name: pokeNameDb.name,
          height: pokeNameDb.height,
          weight: pokeNameDb.weight,
          health: pokeNameDb.hp,
          attack: pokeNameDb.attack,
          defense: pokeNameDb.defense,
          speed: pokeNameDb.speed,
          image: pokeNameDb.image,
          types: pokeNameDb.types.map((type) => type.name),
          createdInDb: pokeNameDb.createdInDb,
        };
    }

    const pokeApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (pokeApi.data) {
        const pokemon = pokeApi.data;
        const pokeNameApi = {
            name: name,
            id: pokemon.id,
            height: pokemon.height,
            weight: pokemon.weight,
            health: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            types: pokemon.types.map((element) => element.type.name),
            image: pokemon.sprites.other["official-artwork"].front_default,
            createdInDb: false,
        };

        return pokeNameApi;
    }


}


module.exports = getPokemonByName;