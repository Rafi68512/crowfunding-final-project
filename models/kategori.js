const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Kategori = sequelize.define("Kategori", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
  });

  Kategori.associate = (models) => {
    Kategori.hasOne(models.Proyek, {
      foreignKey: "kategori_id",
    });
  };

  return Kategori;
};
