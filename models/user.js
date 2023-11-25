const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models) => {
    User.hasOne(models.Admin, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
    User.hasOne(models.Login, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
    User.hasOne(models.Register, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
    User.hasOne(models.Logout, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
    User.hasOne(models.Anggota, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
    User.hasOne(models.Komentar, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
    User.hasOne(models.Pembayaran, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
  };

  return User;
};
