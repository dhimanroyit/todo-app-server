import jwt from '../../../utils/jwt.js';
import CustomError from '../../../utils/error/customError.js';
import userRepository from '../../modules/user/userRepository.js';

const authProtect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith('Bearer ')) {
    const err = new CustomError('token not found', 404);
    return next(err);
  }
  const token = bearer.split('Bearer ')[1].trim();

  try {
    const payload = await jwt.verifyToken(token);
    if (!payload) throw new CustomError('token not verify', 401);
    const user = await userRepository.findById(payload.id, {
      select: '-password',
    });
    if (!user) throw new CustomError('user not authorized', 401);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

export default authProtect;
