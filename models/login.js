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
      onDelete: "CASCADE",
      references: {
        model: "User",
        key: "id",
      },
    },
    timestamp: {
      type: DataTypes.DATE,
    },
  });

  Login.associate = (models) => {
    Login.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
  };

  return Login;
};
