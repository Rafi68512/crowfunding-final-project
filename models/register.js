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

  Register.associate = (models) => {
    Register.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
  };

  return Register;
};
