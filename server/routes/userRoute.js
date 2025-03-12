const express = require('express');
const { loginUser, registerUser, adminLogin } = require('../controllers/userController.js');
const userRouter = express.Router();

// Signup route
userRouter.post('/register', registerUser);

// Login route
userRouter.post('/login', loginUser);

// Admin Login Route
userRouter.post('/admin', adminLogin);

module.exports = userRouter;
