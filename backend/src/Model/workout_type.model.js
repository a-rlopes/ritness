module.exports = (sequelize, Sequelize) => {
    const WorkoutType = sequelize.define("workout_type", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return WorkoutType;
  };