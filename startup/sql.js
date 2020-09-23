const Sequelize = require("sequelize");

// const sequelize = new Sequelize("devticketstodo", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
//   logging: false,

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000,
//   },
// });

// dev
const sequelize = new Sequelize("devticketstodo", "devticketstodousr", "devticketstodopwd", {
  host: "localhost",
  dialect: "mysql",
  logging: false,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

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
