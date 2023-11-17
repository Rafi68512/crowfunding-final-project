"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Proyek extends Model {
    static associate(models) {}
  }
  Proyek.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      kategori_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Proyek",
      tableName: "proyek",
      underscored: false,
      timestamps: false,
    }
  );
  return Proyek;
};
