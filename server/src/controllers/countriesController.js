const { Country, Activity } = require("../db")

// Controller search for id
const searchCountryIdController = async (id)=> {
    const countryDetails = await Country.findOne({
        where: {
            id: id
        },
        include: {model: Activity, through: "countryXActivity"},

    });
    return countryDetails;
};
 
/*
    const country = await Country.findByPk(countryId, {
      include: { model: Activity, through: 'CountryActivities' }, // Carga las actividades relacionadas
    });


*/

// Controller search for continent
const searchCountryContinentController = async (continent)=> {
    const continentDetails = await Country.findAll({where : { continent : continent}});
    return continentDetails;  
};


module.exports = {
    searchCountryIdController,
    searchCountryContinentController
}