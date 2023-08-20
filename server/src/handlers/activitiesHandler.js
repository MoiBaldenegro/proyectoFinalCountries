const { createActivity } = require("../controllers/activitiesController");
const { Activity } = require("../db");

const activitiesPostHandler = async (req, res)=>{
    const { name, difficulty, duration, season, countries } = req.body;
    
    try {
        const response = await createActivity(name, difficulty, duration, season, countries);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};
const activitiesGetHandler =  async  (req, res)=>{
    try {
        const allActivities = await Activity.findAll();
        console.log(allActivities);
        res.status(200).json(allActivities);   
    } catch (error) {
        res.status(400).json({ error : error.message});
        
    }
    
};


module.exports = {
    activitiesGetHandler,
    activitiesPostHandler
};