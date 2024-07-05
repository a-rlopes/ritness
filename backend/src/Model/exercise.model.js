module.exports = (sequelize, Sequelize) => {
  const models = require("./db");
  const Exercise = sequelize.define("exercise", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  Exercise.associate = (models) => {
    Exercise.hasMany(models.set, { foreignKey: 'exercise_id' });
  };

  return Exercise;
};