module.exports = (sequelize, Sequelize) => {
    const models = require("./db");
    const WorkoutPlan = sequelize.define("workout_plan", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(100)
        },
        startDate: {
            type: Sequelize.DATE
        },
        endDate: {
            type: Sequelize.DATE
        }
    });

    WorkoutPlan.associate = (models) => {
        WorkoutPlan.hasMany(models.workoutModel,  { foreignKey: 'workout_plan_id' })
    };

    return WorkoutPlan;
};