// models
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Proyek = sequelize.define(
    "Proyek",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: {
        type: DataTypes.STRING,
      },
      deskripsi: {
        type: DataTypes.TEXT,
      },
      goal: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Proyek",
    }
  );

  Proyek.associate = (models) => {
    Proyek.hasMany(models.Pembayarans, {
      foreignKey: "proyek_id",
    });
    Proyek.hasMany(models.Komentars, {
      foreignKey: "proyek_id",
      onDelete: "CASCADE",
    });
    Proyek.belongsTo(models.Kategori, {
      foreignKey: "kategori_id",
      onDelete: "CASCADE",
    });
  };

  return Proyek;
};
