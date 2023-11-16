const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Register = sequelize.define("Register", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    timestamp: {
      type: DataTypes.DATE,
    },
  });

  return Register;
};
