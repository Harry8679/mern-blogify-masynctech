const express = require('express');
const { register, login, getProfile } = require('../controllers/user.controller');
const isLoggin =  require('../middlewares/isLoggin.middleware');

const userRoute = express.Router();

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.post('/profile/:id', isLoggin, getProfile);

module.exports = userRoute;