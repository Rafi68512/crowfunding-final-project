const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Anggota = sequelize.define("Anggota", {
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
    nama: {
      type: DataTypes.STRING,
    },
  });

  Anggota.associate = (models) => {
    Anggota.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
  };

  return Anggota;
};
