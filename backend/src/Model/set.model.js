module.exports = (sequelize, Sequelize) => {
    const Set = sequelize.define("set", {
      weight: {
        type: Sequelize.FLOAT
      },
      n: {
        type: Sequelize.INTEGER
      },
      load: {
        type: Sequelize.FLOAT
      }
    });
  
    return Set;
  };