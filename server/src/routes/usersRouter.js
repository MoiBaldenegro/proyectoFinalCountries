const { Router } = require("express");
const {createUserHandler, usersHandler } = require("../handlers/usersHandler");


const usersRouter = Router();

usersRouter.get("/login",  usersHandler);
usersRouter.post("/create", createUserHandler);

module.exports= usersRouter;