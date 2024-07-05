module.exports = (sequelize, Sequelize) => {
  const models = require("./db");
    const Set = sequelize.define("set", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      weight: {
        type: Sequelize.FLOAT
      },
      n: {
        type: Sequelize.INTEGER
      },
      load: {
        type: Sequelize.FLOAT
      },
      workout_log_id: {
          type: Sequelize.INTEGER,
          removeEventListenereferences: {
              model: models.workoutLog,
              key: "id"
          }
      },
      exercise_id: {
          type: Sequelize.INTEGER,
          removeEventListenereferences: {
              model: models.exercise,
              key: "id"
          }
      },
    });
  
    Set.associate = (models) => {
      Set.belongsTo(models.workoutLog, { foreignKey: 'workout_log_id', as: 'workout_log' });
      Set.belongsTo(models.exercise, { foreignKey: 'exercise_id', as: 'exercise' });
  };

    return Set;
  };