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
};

module.exports = UserController;
