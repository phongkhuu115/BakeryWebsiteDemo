const User = require('../models/user.model')

const UserController = {
  GetAllUser: (req, res) => {
    try {
      User.GetAllUser((err, rows) => {
        if (err) {
          res.json(err)
        }
        else {
          res.status(200).json(rows)
        }
      })
    } catch (error) {
      console.log(error)
    }
  },
  Register: (req, res) => {
    try {
      User.Register(req.body, (err, rows) => {
        if (err)
          res.json(err)
        else 
          res.status(201).json({
            status: 'success',
            message: 'User Register Successfully'
          })
      })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = UserController