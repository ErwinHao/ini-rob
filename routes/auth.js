const express = require('express');
const router = express.Router();

const { validateUser } = require('../middlewares/userValidator');

const { signUp } = require('../controllers/authController');

router.put('/signup', validateUser, signUp);

module.exports = router;
