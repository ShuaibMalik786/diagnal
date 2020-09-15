const express = require("express");
const router = express.Router();
const mysqlLib = require("../startup/sql");
const winston = require("winston");
const Sequelize = require("sequelize");
const cities = require("../models/cities")(sequelize, Sequelize.DataTypes);

router.get("/", async (req, res) => {
  let city;
  try {
    city = await cities.findAll();
  } catch (e) {
    winston.error(e);
    res.send(e);
  }
  res.send(city);
});

module.exports = router;
