const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const { dbUploaded } = require("./src/controllers/dbUploadedController");

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  dbUploaded();

  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
