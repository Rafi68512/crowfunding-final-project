const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Komentar = sequelize.define("Komentar", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    proyek_id: {
      type: DataTypes.INTEGER,
    },
    isi: {
      type: DataTypes.TEXT,
    },
  });

  return Komentar;
};
