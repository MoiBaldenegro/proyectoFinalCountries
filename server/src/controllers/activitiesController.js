const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const createActivity = async ( name, difficulty, duration, season, countries ) => {
     const activity = await Activity.create({ name, difficulty, duration, season });
     await activity.addCountries(countries)
     const activityRelation = await Activity.findOne({where : { id : activity.id}, 
        include : { model: Country}})

     
     
     return activityRelation;
     
    }






module.exports = {
    createActivity
}
