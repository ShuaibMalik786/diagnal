const Sequelize = require("sequelize");
const { config } = require("../config/config");

const sequelize = new Sequelize(
  config.SQL_DB,
  config.SQL_DB_USER,
  config.SQL_DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(function () {
    console.log("connected to database " + sequelize.config.database);
  })
  .catch(function (er) {
    console.log(er.message);
  });

module.exports = sequelize;
global.sequelize = sequelize;
