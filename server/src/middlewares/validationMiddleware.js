function generateValidationMiddleware(
  joiSchema,
  validateProperty = 'body'
) {
  return async function (req, res, next) {
    try {
      const validatedData = await joiSchema.validateAsync(req[validateProperty]);
      req[validateProperty] = validatedData;
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = {
  generateValidationMiddleware,
};