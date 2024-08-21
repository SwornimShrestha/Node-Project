const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("haha", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  //   operatorsAliases: false,
  pool: { max: 5, min: 0, acquire: 3000, idle: 10000 },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("milyo hai username and password");
  })
  .catch((err) => {
    console.log("error aayo hai", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Synced Done!");
});

module.exports = db;
