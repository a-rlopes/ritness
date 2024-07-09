module.exports = (sequelize, Sequelize) => {
    const models = require("./db");
    const WorkoutModel = sequelize.define("workout_model", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(100)
        },
        weekday: {
            type: Sequelize.INTEGER
        },
        workout_plan_id: {
            type: Sequelize.INTEGER,
            removeEventListenereferences: {
                model: models.workoutPlan,
                key: "id"
            }
        },
        workout_type_id: {
            type: Sequelize.INTEGER,
            removeEventListenereferences: {
                model: models.workoutType,
                key: "id"
            }
        },
    });
    
    WorkoutModel.associate = (models) => {
        WorkoutModel.belongsTo(models.workoutPlan, { foreignKey: 'workout_plan_id', as: 'workout_plan' });
        WorkoutModel.belongsTo(models.workoutType, { foreignKey: 'workout_type_id', as: 'workout_type' });
        WorkoutModel.hasMany(models.workoutLog, { foreignKey: 'workout_model_id' });
        WorkoutModel.belongsToMany(models.exercise, { through: models.workoutModelHasExercise , foreignKey: 'workout_model_id'});
    };
    return WorkoutModel;
};