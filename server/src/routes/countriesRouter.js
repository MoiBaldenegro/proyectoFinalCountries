const { Router } = require("express");
const { countriesGetHandler, countriesIdGetHandler, countriesNameGetHandler, countriesContinentGetHandler} = require("../handlers/countriesHandler")

const countriesRouter = Router();

countriesRouter.get("/:continent", countriesContinentGetHandler);
countriesRouter.get("/name", countriesNameGetHandler);
countriesRouter.get("/", countriesGetHandler);
countriesRouter.get("/:id", countriesIdGetHandler);

module.exports = countriesRouter;