const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const db = require('../configs/database').db;
const authMiddleWare = require('../middleware/auth.middleware');
const StringNormalize = require('../function/DataFormat').StringNormalize;
const ValidateEmail = require('../function/Validation').ValidateEmail;
const dotenv = require('dotenv');
dotenv.config();

const User = {
  GetAllUser: (callback) => {
    return db.query('select * from user', callback);
  },
  Register: async (body, callback) => {
    if (body.password.length < 8) {
      throw new Error('Password must have 8 letter or more');
    }
    if (!ValidateEmail(body.User_Email)) {
      console.log(ValidateEmail(body.User_Email));
      throw new Error('Email not in the right format');
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(body.password, salt);
    let insertData = {
      User_ID: crypto.randomUUID(),
      User_FullName: StringNormalize(body.User_FullName),
      username: body.username.trim(),
      password: passwordHashed,
      User_Email: body.User_Email.trim(),
      User_Telephone: body.User_Telephone.trim(),
      User_Address: body.User_Address,
      User_Image:
        'https://firebasestorage.googleapis.com/v0/b/bakerywebsitedemo.appspot.com/o/defaultuser.png?alt=media&token=73731670-5249-4154-949c-29c2abdc9938',
      Refresh_Token: null,
      User_Gender: body.User_Gender,
    };
    return db.query(
      'INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?,?)',
      Object.values(insertData),
      (err, rows) => {
        db.query('INSERT INTO cart VALUES(?,?)', [
          crypto.randomUUID(),
          insertData.User_ID,
        ]);
        callback(err, rows);
      }
    );
  },
  Login: async (body, success, fail) => {
    return db.query(
      'SELECT * FROM users WHERE username = ?',
      body.username,
      (error, result) => {
        let userData = { ...result[0] };
        let is_admin = false;
        if (result[0].username === process.env.ADMIN_USRNME) {
          is_admin = true;
        }
        if (result.length > 1) {
          fail(new Error('Something is wrong'));
        }
        if (error) fail(new Error(error));
        return bcrypt.compare(body.password, result[0].password, (err, res) => {
          if (res) {
            delete userData['password'];
            delete userData['Refresh_Token'];
            const accessToken = authMiddleWare.GenerateAccessToken(
              result[0].User_ID,
              is_admin
            );
            const refreshToken = authMiddleWare.GenerateRefreshToken(
              result[0].User_ID,
              is_admin
            );
            db.query(
              'update users set Refresh_Token = ? where User_ID = ?',
              [refreshToken, result[0].User_ID],
              (err, res) => {
                if (err) throw new Error(err);
              }
            );
            success(err, userData, accessToken, refreshToken);
          } else {
            fail(new Error('Wrong password'));
          }
        });
      }
    );
  },
};

module.exports = User;
