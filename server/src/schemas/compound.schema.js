const joi = require('joi');

const compoundSchema = joi.object({
  compoundName: joi.string().required(),
  compoundDescription: joi.string().required(),
  compoundImageUrl: joi.string().uri().required()
});

module.exports = {compoundSchema};