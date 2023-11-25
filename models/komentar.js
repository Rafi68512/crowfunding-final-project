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

  Komentar.associate = (models) => {
    Komentar.belongsTo(models.Users, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
    });
    Komentar.belongsTo(models.Proyek, {
      foreignKey: "proyek_id",
      onDelete: "CASCADE",
    });
  };

  return Komentar;
};
