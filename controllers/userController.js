const { User } = require('../models'); // Menggunakan model User dari Sequelize
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    // Mengambil data dari body request
    const { username, email, password } = req.body;

    // Mengenkripsi password sebelum disimpan ke database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Menyimpan data user ke database
    const user = await User.create({ username, email, password: hashedPassword });

    // Mengembalikan respons dengan informasi user yang berhasil didaftarkan
    res.status(201).json({ id: user.id, username: user.username, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    // Mengambil data dari body request
    const { email, password } = req.body;

    // Mencari user berdasarkan email
    const user = await User.findOne({ where: { email } });

    // Jika user tidak ditemukan, kirim respons error
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Memeriksa apakah password sesuai
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Jika password tidak sesuai, kirim respons error
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Membuat token JWT
    const token = jwt.sign({ userId: user.id }, '123', { expiresIn: '30m' });

    // Mengembalikan respons dengan token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const logout = (req, res) => {
  // Implementasi logout sesuai kebutuhan aplikasi, misalnya menghapus token dari client side
  res.json({ message: 'Logout successful' });
};

module.exports = { register, login, logout };
