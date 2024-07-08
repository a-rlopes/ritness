module.exports = (sequelize, Sequelize) => {
    const models = require("./db");
    const WorkoutModel = sequelize.define("workout_model_has_exercise", {
        workout_model_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        exercise_id: {
            type: Sequelize.STRING
        },
        exercise_order: {
            type: Sequelize.INTEGER
        },
        n_sets: {
            type: Sequelize.INTEGER
        }
    });
    return WorkoutModel;
};