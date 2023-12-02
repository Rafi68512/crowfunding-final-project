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
  user_id: DataTypes.INTEGER,
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
    kategori_id: DataTypes.INTEGER,
    goal: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    image: DataTypes.STRING,
  },
  {
    timestamps: true,
    freezeTableName: true,
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
Pembayaran.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(Pembayaran, { foreignKey: "user_id" });

Pembayaran.belongsTo(Proyek, { foreignKey: "proyek_id" });
Proyek.hasMany(Pembayaran, { foreignKey: "proyek_id" });

Komentar.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(Komentar, { foreignKey: "user_id" });

Komentar.belongsTo(Proyek, { foreignKey: "proyek_id" });
Proyek.hasMany(Komentar, { foreignKey: "proyek_id" });

module.exports = {
  Users,
  Admin,
  Komentar,
  Proyek,
  Pembayaran,
  Kategori,
};
