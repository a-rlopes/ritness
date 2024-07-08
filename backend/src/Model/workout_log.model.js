module.exports = (sequelize, Sequelize) => {
    const models = require("./db");
    const WorkoutLog = sequelize.define("workout_log", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        date: {
            type: Sequelize.DATE
        },
        note: {
            type: Sequelize.STRING
        },
        workout_model_id: {
            type: Sequelize.INTEGER,
            removeEventListenereferences: {
                model: models.workoutModel,
                key: "id"
            }
        },
        load: {
            type: Sequelize.FLOAT
        }
    });

    WorkoutLog.associate = (models) => {
        WorkoutLog.belongsTo(models.workoutModel, { foreignKey: 'workout_model_id', as: 'workout_model' });
        WorkoutLog.hasMany(models.set, { foreignKey: 'workout_log_id' });
    };

    return WorkoutLog;
};