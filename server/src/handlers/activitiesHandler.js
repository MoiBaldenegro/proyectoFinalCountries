const activitiesPostHandler =  (req, res)=>{
    res.status(200).send("aqui te mando una actividad para que la CREES papa de favor");
};
const activitiesGetHandler =   (req, res)=>{
    res.status(200).send("Aqui te muestro el las ACTIVIDADES PAPA y");
};

module.exports = {
    activitiesGetHandler,
    activitiesPostHandler
};