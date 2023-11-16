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
    },
    nama: {
      type: DataTypes.STRING,
    },
  });

  return Anggota;
};
