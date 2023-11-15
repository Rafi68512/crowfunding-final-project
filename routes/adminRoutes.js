const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Get all users
router.get('/users', adminController.getAllUsers);

// Delete a user by ID
router.delete('/users/:userId', adminController.deleteUser);

// Create a new user (admin)
router.post('/users', adminController.createUser);

module.exports = router;
