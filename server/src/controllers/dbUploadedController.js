const axios = require("axios");
const { Country } = require("../db");



const dbUploaded = async ()=> {

    const response = await axios("http://localhost:5000/countries");
    const countriesData = response.data;

    const countriesModel = countriesData.map((countryData) => {
        return {
          id : countryData.cca3,
          name : countryData.name.common,
          flag : countryData.flags.png,
          continent : countryData.continents[0],
          capital : countryData.capital,
          subregion : countryData.subregion,
          area : countryData.area,
          population : countryData.population,
        };
      });

      await Country.bulkCreate(countriesModel);
      console.log('Database data uploaded successfully my King  :*  !!!');
};

module.exports = {
  dbUploaded
}
