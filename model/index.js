const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("haha", "root", "", {
  host: "localhost",
  port: 3306,
});
