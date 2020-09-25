const express = require("express");
const test = require("../controllers/test");
const cities = require("../controllers/cities");

module.exports = function (app) {
  app.use(express.json());
  app.use("/napi/test", test);
  app.use("/napi/cities", cities);
};
