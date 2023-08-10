const getAllType = require("../controllers/Type/getTypes");

const allPokemonTypes = async (req, res) => {
    try {
        let allTypes = await getAllType();
        if (allTypes.error) throw new Error(allTypes.error);

        res.status(200).json(allTypes);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = allPokemonTypes;