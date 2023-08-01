

const countriesGetHandler = (req, res)=>{
    const { name } = req.query;  
    if(name){
        res.status(200).send(`Este pais lleva el nombre de ${name} `);
    };
    res.status(200).send("Aqui te muestro todos los paises papa"); 
};
const countriesIdGetHandler =  (req, res)=>{
    const { id } = req.params;
    res.status(200).send(`Aqui te muestro el pais con el ID ${id} `);
};
const countriesNameGetHandler =  (req, res)=>{
    
};


module.exports = {
    countriesGetHandler,
    countriesIdGetHandler,
    countriesNameGetHandler
};