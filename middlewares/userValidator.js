const { body } = require('express-validator');

const User = require('../models/User');

exports.validateUser = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email!')
    .trim()
    .normalizeEmail()
    .custom(async (value, { req }) => {
      // try {

      // } catch (error) {

      // }
      const fetchedUser = await User.findOne({ where: { email: value } });
      if (fetchedUser) {
        const error = new Error('Email address already exists');
        error.statusCode = 422;
        throw error;
      }
      return fetchedUser;
    })
    .withMessage('Server Error'),
  body('password').trim().isLength({ min: 5 }),
  body('username').trim().not().isEmpty(),
];
