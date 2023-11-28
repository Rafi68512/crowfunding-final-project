// models/index.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'Kopisusu1212',
  database: 'donasi',
  host: 'localhost'
});

const Users = sequelize.define('Users', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

const Admin = sequelize.define('Admin', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

const Login = sequelize.define('Login', {
  timestamp: DataTypes.DATE,
});

const Register = sequelize.define('Register', {
  timestamp: DataTypes.DATE,
});

const Logout = sequelize.define('Logout', {
  timestamp: DataTypes.DATE,
});

const Anggota = sequelize.define('Anggota', {
  nama: DataTypes.STRING,
});

const Komentar = sequelize.define('Komentar', {
  isi: DataTypes.TEXT,
});

const Proyek = sequelize.define('Proyek', {
  nama: DataTypes.STRING,
  deskripsi: DataTypes.TEXT,
  goal: DataTypes.INTEGER,
});

const Pembayaran = sequelize.define('Pembayaran', {
  jumlah_pembayaran: DataTypes.INTEGER,
  tanggal_pembayaran: DataTypes.DATE,
});

const Kategori = sequelize.define('Kategori', {
  nama: DataTypes.STRING,
});

// Relasi antar tabel
Users.hasOne(Admin, { foreignKey: 'user_id' });
Users.hasOne(Login, { foreignKey: 'user_id' });
Users.hasOne(Register, { foreignKey: 'user_id' });
Users.hasOne(Logout, { foreignKey: 'user_id' });
Users.hasOne(Anggota, { foreignKey: 'user_id' });
Users.hasOne(Komentar, { foreignKey: 'user_id' });
Users.hasOne(Pembayaran, { foreignKey: 'user_id' });
Proyek.belongsTo(Users, { foreignKey: 'user_id' });
Komentar.belongsTo(Users, { foreignKey: 'user_id' });
Komentar.belongsTo(Proyek, { foreignKey: 'proyek_id' });
Pembayaran.belongsTo(Users, { foreignKey: 'user_id' });
Pembayaran.belongsTo(Proyek, { foreignKey: 'proyek_id' });
Proyek.belongsTo(Kategori, { foreignKey: 'kategori_id' });

module.exports = {
  Users,
  Admin,
  Login,
  Register,
  Logout,
  Anggota,
  Komentar,
  Proyek,
  Pembayaran,
  Kategori,
};
