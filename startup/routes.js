const express = require("express");
const test = require("../routes/test");
const cities = require("../routes/cities");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/test", test);
  app.use("/api/cities", cities);
};
