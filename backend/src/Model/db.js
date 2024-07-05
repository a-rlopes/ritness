const dotenvt = require("dotenv").config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.exercise = require("./exercise.model.js")(sequelize, Sequelize);
db.workoutPlan = require("./workoutPlan.model.js")(sequelize, Sequelize);

module.exports = db;