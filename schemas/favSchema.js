const Joi = require('joi');
const favSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = favSchema;