const { Router } = require("express");
const { countriesGetHandler, countriesIdGetHandler, countriesNameGetHandler } = require("../handlers/countriesHandler")

const countriesRouter = Router();


countriesRouter.get("/", countriesGetHandler);
countriesRouter.get("/:idPais", countriesIdGetHandler);
countriesRouter.get("/name?=", countriesNameGetHandler);

module.exports = countriesRouter;