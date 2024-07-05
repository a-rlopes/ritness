module.exports = (sequelize, Sequelize) => {
  const models = require("./db");
  const WorkoutType = sequelize.define("workout_type", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  WorkoutType.associate = (models) => {
    WorkoutType.hasMany(models.workoutModel, { foreignKey: 'workout_type_id' })
  };
  return WorkoutType;
};