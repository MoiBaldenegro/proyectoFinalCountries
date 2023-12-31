const { Router } = require("express");
const { activitiesGetHandler, activitiesPostHandler } = require("../handlers/activitiesHandler")

const activitiesRouter = Router();

activitiesRouter.post("/create", activitiesPostHandler);
activitiesRouter.get("/", activitiesGetHandler)

module.exports = activitiesRouter;


