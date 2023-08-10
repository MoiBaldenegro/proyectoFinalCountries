const  allowedUsers  = require("../../utils/allowedUsers");
const { User, Country  } = require("../db");
const { Op } = require("sequelize");

function loginController(email, password){
    
    let acces= false;

    allowedUsers.forEach((user)=> {
        if(user.email === email && user.password === password){
            acces = true;

        }
        
    })
    return acces;
}

async function createUserController(username, email, password, favorites){
    const user = await User.create( { username: username, email: email, password: password} );

    if(favorites && favorites > 0 ){
        const countriesFavorites = favorites.map(favorites.name);
        const userFavorite = await Country.findAll({where : { name : {[Op.in]: countriesFavorites } }});
        await user.addCountries(userFavorite)
    }

    return user;

}
module.exports={
    loginController,
    createUserController

}