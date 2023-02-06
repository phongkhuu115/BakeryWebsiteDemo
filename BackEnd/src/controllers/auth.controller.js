const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const dotenv = require('dotenv');
const AuthMiddleWare = require('../middleware/auth.middleware')
const db = require('../configs/database').db;
dotenv.config();

const authController = {
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
        (err, rows, access_token, refresh_token) => {
          if (err) res.json(error);
          else {
            res.cookie('refresh_token', refresh_token, {
              httpOnly: true,
              secure: false,
              path: '/',
              sameSite: 'strict',
            });
            res.status(200).json({
              message: 'Login Success',
              user: rows,
              access_token: access_token,
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
  RefreshToken: (req, res) => {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) return res.status(401).json('Unauthenticated');
    db.query('select * from user where Refresh_Token = ?', [refreshToken], (err, rows) => {
      if (rows.length !== 1) {
        res.status(403).json('Refresh Token not valid')
      }
      else {
        console.log('Success refresh')
      }
    })
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        console.log(err)
      }
      const newAccessToken = AuthMiddleWare.GenerateAccessToken(user.user_id, user.is_admin)
      const newRefreshToken = AuthMiddleWare.GenerateRefreshToken(user.user_id, user.is_admin)
      db.query('update user set Refresh_Token = ? where User_ID = ?', [newRefreshToken, user.user_id])
      res.cookie('refresh_token', newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: '/refresh',
        sameSite: 'strict'
      })
      res.status(200).json({
        access_token: newAccessToken,
        message: 'refresh token success'
      })
    });
  },
};

module.exports = authController;
