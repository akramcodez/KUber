const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage('First Name is required'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be atleast 6 characters long'),
  ],
  userController.registerUser,
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be atleast 6 characters long'),
  ],
  userController.loginUser,
);

module.exports = router;
