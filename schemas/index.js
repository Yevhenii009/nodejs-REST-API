const {
  addSchema,
  favSchema,
  updSchema,
  contactSchema,
} = require('./contacts');

const {
  userSchema,
  registerSchema,
  loginSchema,
  subscriptionSchema,
} = require('./auth');

module.exports = {
  addSchema,
  favSchema,
  updSchema,
  contactSchema,
  userSchema,
  registerSchema,
  loginSchema,
  subscriptionSchema,
};