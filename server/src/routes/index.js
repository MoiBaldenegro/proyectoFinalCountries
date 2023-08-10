const { Router } = require("express");
const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");
const usersRouter = require("./usersRouter");

const router = Router();


router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);
router.use("/users", usersRouter);




module.exports = router;
