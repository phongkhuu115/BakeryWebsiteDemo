const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const middlewareController = {
  VerifyJWT: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(' ')[1];
      jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
          res.status(403).json({
            message: 'Token invalid',
          });
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  },
};

module.exports = middlewareController;