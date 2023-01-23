const routes = require('express').Router();
const UserController = require('../controllers/user.controller');
const AuthController = require('../controllers/auth.controller');
const User = require('../models/user.model');

routes.get('/getalluser', AuthController.VerifyJWT, UserController.GetAllUser);
routes.post('/register', UserController.Register);
routes.post('/login', UserController.Login);

module.exports = routes;
