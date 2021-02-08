exports.errorHandler = (err, req, res, next) => {
  const status = err.statusCode;
  const message = err.message;
  const data = err.data;
  return res.status(status).json({ message, data });
};
