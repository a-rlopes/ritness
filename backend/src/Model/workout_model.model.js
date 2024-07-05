module.exports = (sequelize, Sequelize) => {
    const WorkoutModel = sequelize.define("workout_model", {
        name: {
            type: Sequelize.STRING
        },
        weekday: {
            type: Sequelize.INTEGER
        }
    });

    return WorkoutModel;
};