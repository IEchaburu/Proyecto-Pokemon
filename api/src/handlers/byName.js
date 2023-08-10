const getPokemonByName = require("../controllers/Pokemon/getPokemonByName");

const byName = async (req, res) => {
    let { name } = req.query;
    if (name) {
        let pokeName = await getPokemonByName(name.toLocaleLowerCase());
        if(pokeName.error) throw new Error(pokeName.error);
        
        res.status(200).json(pokeName);
    }
}

module.exports = byName;