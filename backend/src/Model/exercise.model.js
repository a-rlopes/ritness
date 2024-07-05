module.exports = (sequelize, Sequelize) => {
    const Exercise = sequelize.define("exercise", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Exercise;
  };