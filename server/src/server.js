const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

server.get("/countries", (req, res)=>{
    res.status(200).send("Ruta funcionando como pedrada")

})

module.exports = server;
