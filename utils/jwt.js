import jwt from 'jsonwebtoken';
import config from '../src/config/index.js';

const tokenGenerate = (user) => {
  return jwt.sign({ id: user._id }, config.jwtSecret, {
    // expiresIn: process.env.JWT_EXPIRATION,
  });
};
// token verify function
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, (err, payload) => {
      if (err) {
        return reject(err);
      }
      resolve(payload);
    });
  });
};

export default { tokenGenerate, verifyToken };
