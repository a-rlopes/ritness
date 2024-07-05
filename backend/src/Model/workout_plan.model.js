module.exports = (sequelize, Sequelize) => {
    const WorkoutPlan = sequelize.define("workout_plan", {
        name: {
            type: Sequelize.STRING
        },
        startDate: {
            type: Sequelize.DATE
        },
        endDate: {
            type: Sequelize.DATE
        }
    });

    return WorkoutPlan;
};