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
db.set = require("./set.model.js")(sequelize, Sequelize);
db.workoutLog = require("./workout_log.model.js")(sequelize, Sequelize);
db.workoutModel = require("./workout_model.model.js")(sequelize, Sequelize);
db.workoutPlan = require("./workout_plan.model.js")(sequelize, Sequelize);
db.workoutType = require("./workout_type.model.js")(sequelize, Sequelize);

module.exports = db;