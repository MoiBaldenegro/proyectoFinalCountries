const { Activity, Country } = require("../db");

const createActivity = async ( name, difficulty, duration, season, countries ) => {
     const activity = await Activity.create({ name, difficulty, duration, season });

     if(countries && countries.length > 0 ){
        const activityCountry = await Country.findAll({where : { name : countries}});
        await activity.addCountries(activityCountry)
     }

     return activity;
     
};





module.exports = {
    createActivity
}
