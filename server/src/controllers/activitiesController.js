const { Activity } = require("../db");

const createActivity = async ( name, difficulty, duration, season ) => {
     return await Activity.create({ name, difficulty, duration, season });
     
};

module.exports = {
    createActivity
}
