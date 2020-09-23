const express = require("express");
const app = express();

// require("./startup/logging")();
const mysqllib = require("./startup/sql");
require("./startup/routes")(app);
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

const associate = require("./associations/associations");
associate();

module.exports = server;
