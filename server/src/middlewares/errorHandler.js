const joi = require('joi');
const sequelize = require('sequelize');
const { NotFoundError, HttpError, CompoundError } = require('../errors');

function errorHandlerMiddleware(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  const errors = [
    {errorType: joi.ValidationError, status: 400},
    {errorType: sequelize.UniqueConstraintError, status: 400, getErrorMessage(err) {
      return err.parent.message;
    }},
    {errorType: sequelize.ValidationError, status: 400},
    {errorType: NotFoundError, status: 404},
    {errorType: HttpError},

    // Compound Error should be at last as it is the base class for other errors
    {errorType: CompoundError, status: 500}
  ];

  const typeOfError = errors.find(e => err instanceof e.errorType);
  if (typeOfError) {
    return res
      .status(typeOfError.status || err.status || 500)
      .json({
        message: typeOfError.getErrorMessage ?
          typeOfError.getErrorMessage(err) :
          err.message
      });
  }
  return res.status(500).json({ message: 'Something unexpected happened' });
}

module.exports = {
  errorHandlerMiddleware
};