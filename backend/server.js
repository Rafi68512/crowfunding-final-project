const app = require('./app.js'); 
const { Sequelize, DataTypes } = require("sequelize");
const seq = new Sequelize("donasi", "postgres", "12345", {
    host: "localhost",
    dialect: "postgres",
});

const port = 3000;

// Cek koneksi ke database
seq
    .authenticate()
    .then(() => {
        console.log('Koneksi ke database berhasil.');
    })
    .catch((err) => {
        console.error('Gagal terkoneksi ke database:', err);
    });

app.get('/', (req, res) => {
    res.send(`Server berjalan di port ${port}`);
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = app;
