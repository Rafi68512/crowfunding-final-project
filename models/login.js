const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Login = sequelize.define("Login", {
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

  return Login;
};
