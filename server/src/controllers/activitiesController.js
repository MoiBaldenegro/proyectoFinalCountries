const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const createActivity = async ( name, difficulty, duration, season, countries ) => {
     const activity = await Activity.create({ name, difficulty, duration, season });
     await activity.addCountries(countries)
     const activityRelation = await Activity.findOne({where : { id : activity.id}, 
        include : { model: Country}})

     
    /* if(countries && countries.length > 0 ){
        const countriesNames = countries.map(country => country.name);
        const activityCountry = await Country.findAll({where : { name : {[Op.in]: countriesNames } }});
        await activity.addCountries(activityCountry)*/
     
     return activityRelation;
     
    }






module.exports = {
    createActivity
}
