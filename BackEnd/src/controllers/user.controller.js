const User = require('../models/user.model');
const dotenv = require('dotenv');
dotenv.config();

const UserController = {
  GetAllUser: (req, res) => {
    if (!req.user.is_admin && req.user.user_id !== process.env.ADMIN_ID) {
      res.status(401).json({
        message: 'Your token is unauthorized',
      });
    } else {
      try {
        User.GetAllUser((err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.status(200).json(rows);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  Register: async (req, res) => {
    try {
      await User.Register(req.body, (err, rows) => {
        if (err) res.json(err);
        else
          res.status(201).json({
            status: 'success',
            message: 'User Register Successfully',
          });
      });
    } catch (error) {
      res.status(400).json({
        message: error + '',
      });
    }
  },
  Login: (req, res) => {
    try {
      User.Login(
        req.body,
        (err, rows, token) => {
          if (err) res.json(error);
          else {
            res.status(200).json({
              message: 'Login Success',
              user: rows,
              token: token,
            });
          }
        },
        (error) => {
          res.status(400).json({
            message: error + '',
          });
        }
      );
    } catch (error) {
      res.status(400).json({
        message: error + '',
      });
    }
  },
};

module.exports = UserController;
