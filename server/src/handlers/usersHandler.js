const { loginController, createUserController} = require("../controllers/usersController");
const { User } = require("../db");



async function usersHandler(req, res){
    const {email, password, username, } = req.query;
    try {
        const response = await loginController(email, password, username);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error : error.message}) 
    }

}; 



async function createUserHandler(req, res){
    const { username, email, password, favorites } = req.body;
    try {
        const response = await createUserController( username, email, password, favorites);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message}) 
    };
};

module.exports={

    usersHandler,
    createUserHandler
}

