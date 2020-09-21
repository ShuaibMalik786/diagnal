const express = require("express");
const test = require("../routes/test");
const cities = require("../routes/cities");

module.exports = function (app) {
  app.use(express.json());
  app.use("/napi/test", test);
  app.use("/napi/cities", cities);
};
