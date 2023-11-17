const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Logout = sequelize.define("Logout", {
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

  return Logout;
};
