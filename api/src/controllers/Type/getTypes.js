const axios = require("axios");
const { Type } = require("../../db");


const getAllType = async () => {
  try {
    let types = await Type.findAll({ attributes: ["id", "name"] });
    if (!types.length) {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/type`);    
        types = data.results;

        for (const type of types) {
            const url = await axios.get(type.url);
            delete type.url;
            
            type.id = url.data.id;
        }

        await Type.bulkCreate(types);   
          

    }
    return types;
        
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getAllType;
