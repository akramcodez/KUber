const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
  '/register',
  [
    body('fullname.firstName')
      .isString()
      .isLength({ min: 3 })
      .withMessage('First Name must be at least 3 characters long'),
    body('fullname.lastName')
      .optional()
      .isString()
      .isLength({ min: 3 })
      .withMessage('Last Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password')
      .isString()
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
    body('vehicle.color')
      .isString()
      .isLength({ min: 3 })
      .withMessage('Vehicle color must be at least 3 characters long'),
    body('vehicle.plateNumber')
      .isString()
      .isLength({ min: 3 })
      .withMessage('Vehicle plate number must be at least 3 characters long'),
    body('vehicle.capacity')
      .isNumeric()
      .withMessage('Vehicle capacity must be a number'),
    body('vehicle.vehicleType')
      .isString()
      .isIn(['car', 'motorcycle', 'auto'])
      .withMessage('Vehicle type must be one of: car, motorcycle, auto'),
  ],
  captainController.registerCaptain,
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password')
      .isString()
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
  ],
  captainController.loginCaptain,
);

router.get(
  '/profile',
  authMiddleware.authCaptain,
  captainController.getCaptainProfile,
);

router.get(
  '/logout',
  authMiddleware.authCaptain,
  captainController.logoutCaptain,
);

module.exports = router;
