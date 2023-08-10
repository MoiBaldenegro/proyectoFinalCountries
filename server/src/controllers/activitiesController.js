const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const createActivity = async ( name, difficulty, duration, season, countries ) => {
     const activity = await Activity.create({ name, difficulty, duration, season });
     
     if(countries && countries.length > 0 ){
        const countriesNames = countries.map(countries.name);
        const activityCountry = await Country.findAll({where : { name : {[Op.in]: countriesNames } }});
        await activity.addCountries(activityCountry)
     }

     return activity;
     
};





module.exports = {
    createActivity
}
