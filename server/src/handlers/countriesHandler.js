const countriesGetHandler = (req, res)=>{
    res.status(200).send("Aqui te muestro todos los paises papa");
};
const countriesIdGetHandler =  (req, res)=>{
    res.status(200).send("Aqui te muestro el pais con el ID que tu quieras papa");
};
const countriesNameGetHandler =  (req, res)=>{
    res.status(200).send("Aqui te muestro el pais con el NOMBRE que tu quieras mi rey");
};


module.exports = {
    countriesGetHandler,
    countriesIdGetHandler,
    countriesNameGetHandler
};