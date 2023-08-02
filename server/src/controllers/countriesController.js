const axios = require("axios");
const { Country } = require("../db")

const searchCountryIdController = async (id)=> {
    const countryDetails = await Country.findByPk(id);
    return countryDetails;
    
    
};


module.exports = {
    searchCountryIdController
}