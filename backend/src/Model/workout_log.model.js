module.exports = (sequelize, Sequelize) => {
    const WorkoutLog = sequelize.define("workout_log", {
        date: {
            type: Sequelize.DATE
        },
        note: {
            type: Sequelize.STRING
        }
    });

    return WorkoutLog;
};