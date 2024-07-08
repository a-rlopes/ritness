module.exports = (sequelize, Sequelize) => {
  const models = require("./db");
  const Exercise = sequelize.define("exercise", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(100),
      unique: true
    },
    description: {
      type: Sequelize.STRING(800)
    }
  });

  Exercise.associate = (models) => {
    Exercise.hasMany(models.set, { foreignKey: 'exercise_id' });
    Exercise.belongsToMany(models.workoutModel, { through: models.workoutModelHasExercise , foreignKey: 'exercise_id'});
  };

  return Exercise;
};