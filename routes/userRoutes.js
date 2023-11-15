const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Get user by ID
router.get('/user/:userId', userController.getUserById);

// Update user by ID
router.put('/user/:userId', userController.updateUser);

// Delete user by ID
router.delete('/user/:userId', userController.deleteUser);

module.exports = router;