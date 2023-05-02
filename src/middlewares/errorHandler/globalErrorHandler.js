import CustomError from '../../../utils/error/customError.js';

const globalErrorHandler = (err, req, res, next) => {
  console.error('error', err);
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      error: true,
      message: err.message,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      error: true,
      message: 'something went wrong',
    });
  }
};

export default globalErrorHandler;
