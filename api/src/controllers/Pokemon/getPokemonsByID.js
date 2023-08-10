const { Pokemon, Type } = require("../../db");
const axios = require("axios");


const getPokemonsById = async (id, origin) => {
    // AQUI OBTENEMOS LOS POKEMONS DE LA BASE DE DATOS, ENTRA EN EL IF SOLO SI ORIGIN ES IGUAL A 'DB'
    if (origin === 'db') {
        const dbPokemon = await Pokemon.findOne({
            where: { id: id },
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    types: [],
                },
            },
        })

        const pokemonDb = {
            id: dbPokemon.dataValues.id,
            name: dbPokemon.dataValues.name,
            height:dbPokemon.dataValues.height,
            weight: dbPokemon.dataValues.weight,
            health: dbPokemon.dataValues.health,
            attack: dbPokemon.dataValues.attack,
            defense: dbPokemon.dataValues.defense,
            speed: dbPokemon.dataValues.speed,
            image: dbPokemon.dataValues.image,
            createdInDb: dbPokemon.created,
        }

        return pokemonDb;
    }
    // EN CASO DE QUE ORIGIN SEA DISTINTO A 'DB' CONTINUA Y BUSCA EN LA API
    const apiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (apiPokemon.data) {
        const pokemon = apiPokemon.data;

        const pokemonApi = {
            id: id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            health: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            types: pokemon.types.map((el) => el.type.name),
            image: pokemon.sprites.other["official-artwork"].front_default,
            createdInDb: false,
        }
        return pokemonApi
    }
}

module.exports = getPokemonsById;