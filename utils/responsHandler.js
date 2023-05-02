const responseHandler = (statusCode, message, data) => {
  return {
    ...(statusCode && { statusCode }),
    success: true,
    ...(message && { message }),
    ...(data && { data }),
  };
};

export default responseHandler;
