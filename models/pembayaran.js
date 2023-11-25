const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Pembayaran = sequelize.define("Pembayaran", {
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
    jumlah_pembayaran: {
      type: DataTypes.DECIMAL(10, 2),
    },
    tanggal_pembayaran: {
      type: DataTypes.DATE,
    },
  });

  Pembayaran.associate = (models) => {
    Pembayaran.belongsTo(models.Proyeks, {
      foreignKey: "proyek_id",
    });
  };

  return Pembayaran;
};
