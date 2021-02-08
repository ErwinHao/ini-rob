const User = require('../models/User');

const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator');

exports.signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation Failed');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: 'User Created',
      userId: user.id,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
