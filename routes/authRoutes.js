const express = require('express');
const { register, login, logout } = require('../controllers/userController');
const router = express.Router();

// Rute untuk registrasi user
router.post('/register', register);

// Rute untuk login user
router.post('/login', login);

// Rute untuk logout user
router.post('/logout', logout);

module.exports = router;
