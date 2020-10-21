const express = require("express");
const test = require("../controllers/test");
const meta = require("../controllers/meta");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/test", test);
  app.use("/api/getMeta", meta);
};
