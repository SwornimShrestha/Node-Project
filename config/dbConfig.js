const databaseConfig = {
  db: process.env.DB,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 3306,
  dialect: "mysql",
};

module.exports = databaseConfig;
