//////////////////////////////////////////////////////////////////////////
//////////////////////// HANDLER QUE TRAE A TODOS ////////////////////////
//////////////////////////////////////////////////////////////////////////

const { searchCountryIdController, } = require("../controllers/countriesController");
const { Country } = require("../db");

const countriesGetHandler = async (req, res)=>{
    if(req.query.name){
        return countriesNameGetHandler(req, res);
    } else {
            try {
                const allCountries = await Country.findAll();
                res.status(200).json(allCountries); 
            } catch (error) {
                res.status(400).json({error : error.message}); 
            };    
    };  
    }
    
//////////////////////////////////////////////////////////////////////////
//////////////////////// HANDLER QUE FILTRA POR ID ///////////////////////
//////////////////////////////////////////////////////////////////////////

const countriesIdGetHandler = async (req, res)=>{
    const { id } = req.params;
    try {
        const response = await searchCountryIdController(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error : error.message});  
    };

};

///////////////////////////////////////////////////////////////////////////
//////////////////////// HANDLER QUE FILTRA POR NOMBRE ////////////////////
///////////////////////////////////////////////////////////////////////////

const countriesNameGetHandler =  async (req, res)=>{
    const { name } = req.query;
    try {
        const countryByName = await Country.findAll({where : {name : name}});
    res.status(200).json(countryByName); 
    } catch (error) {
        res.status(400).json({error : error.message}); 
    };  
    
};

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


module.exports = {
    countriesGetHandler,
    countriesIdGetHandler,
    countriesNameGetHandler
};