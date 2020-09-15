const Sequelize = require("sequelize");

const sequelize = new Sequelize("devticketstodo", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

try {
  sequelize.authenticate();
  console.log("SQL connection  established successfully.");
} catch (error) {
  console.error("Unable to connect to the SQL database:", error);
}

module.exports = sequelize;
global.sequelize = sequelize;
