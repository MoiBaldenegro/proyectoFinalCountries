const { Router } = require("express");
const { countriesGetHandler, countriesIdGetHandler, countriesNameGetHandler } = require("../handlers/countriesHandler")

const countriesRouter = Router();

countriesRouter.get("/name", countriesNameGetHandler);
countriesRouter.get("/", countriesGetHandler);
countriesRouter.get("/:id", countriesIdGetHandler);

module.exports = countriesRouter;