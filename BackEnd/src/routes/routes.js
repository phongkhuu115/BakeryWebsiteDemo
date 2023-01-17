const routes = require('express').Router()
const UserController = require('../controllers/user.controller')
const User = require('../models/user.model')

routes.get('/getalluser', UserController.GetAllUser)
routes.post('/register', UserController.Register)

module.exports = routes