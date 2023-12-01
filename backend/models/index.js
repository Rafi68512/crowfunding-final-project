// models/index.js
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "postgres",
  database: "donasi",
  host: "localhost",
});

const Users = sequelize.define(
  "Users",
  {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: true,
  }
);

const Admin = sequelize.define("Admin", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

const Komentar = sequelize.define("Komentar", {
  isi: DataTypes.TEXT,
});

const Proyek = sequelize.define(
  "Proyek",
  {
    nama: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    goal: DataTypes.INTEGER,
    image: DataTypes.STRING,
  },
  {
    timestamps: true,
  }
);

const Pembayaran = sequelize.define("Pembayaran", {
  jumlah_pembayaran: DataTypes.INTEGER,
  tanggal_pembayaran: DataTypes.DATE,
});

const Kategori = sequelize.define("Kategori", {
  nama: DataTypes.STRING,
});

// Relasi antar tabel
Users.hasOne(Admin, { foreignKey: "user_id" });
Users.hasOne(Komentar, { foreignKey: "user_id" });
Users.hasOne(Pembayaran, { foreignKey: "user_id" });
Proyek.belongsTo(Users, { foreignKey: "user_id" });
Komentar.belongsTo(Users, { foreignKey: "user_id" });
Komentar.belongsTo(Proyek, { foreignKey: "proyek_id" });
Pembayaran.belongsTo(Users, { foreignKey: "user_id" });
Pembayaran.belongsTo(Proyek, { foreignKey: "proyek_id" });
Proyek.belongsTo(Kategori, { foreignKey: "kategori_id" });

module.exports = {
  Users,
  Admin,
  Komentar,
  Proyek,
  Pembayaran,
  Kategori,
};
