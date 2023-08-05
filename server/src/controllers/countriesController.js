const { Country } = require("../db")

// Controller search for id
const searchCountryIdController = async (id)=> {
    const countryDetails = await Country.findByPk(id);
    return countryDetails;
};
// Controller search for continent
const searchCountryContinentController = async (continent)=> {
    const continentDetails = await Country.findAll({where : { continent : continent}});
    return continentDetails;  
};


module.exports = {
    searchCountryIdController,
    searchCountryContinentController
}