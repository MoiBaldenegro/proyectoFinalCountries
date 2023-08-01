const { createActivity } = require("../controllers/activitiesController")

const activitiesPostHandler = async (req, res)=>{
    const { name, difficulty, duration, season } = req.body;
    try {
        const response = await createActivity(name, difficulty, duration, season);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};
const activitiesGetHandler =   (req, res)=>{
    res.status(200).send(`Aqui te muestro el las ACTIVIDADES PAPA y`);
};

module.exports = {
    activitiesGetHandler,
    activitiesPostHandler
};