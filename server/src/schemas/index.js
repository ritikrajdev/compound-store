const joi = require('joi');

const paginationQuerySchema = joi.object({
  page: joi.number().integer().min(1).default(1),
  limit: joi.number().integer().min(1).max(100).default(10)
});

module.exports = {
  paginationQuerySchema
};