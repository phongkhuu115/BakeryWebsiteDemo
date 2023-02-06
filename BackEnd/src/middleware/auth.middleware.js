const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleWare = {
  GenerateAccessToken: (User_ID, is_admin) => {
    return jwt.sign(
      {
        user_id: User_ID,
        is_admin: is_admin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '30d',
      }
    );
  },
  GenerateRefreshToken: (User_ID, is_admin) => {
    return jwt.sign(
      {
        user_id: User_ID,
        is_admin: is_admin,
      },
      process.env.JWT_REFRESH_KEY,
      {
        expiresIn: '365d',
      }
    );
  }
}

module.exports = authMiddleWare