const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const field = error.details[0].path;
      const isBodyEmpty = field.length === 0;

      next(
        HttpError(
          400,
          isBodyEmpty ? `missing fields` : `missing required ${field} field`
        )
      );
    }
    next();
  };

  return func;
};

module.exports = validateBody;