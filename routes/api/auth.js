const express = require('express');
const ctrl = require('../../controllers');
const schemas = require('../../schemas');
const { validateBody, authenticate } = require('../../middlewares');
const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);
router.get('/current', authenticate, ctrl.getCurrent);
router.post('/logout', authenticate, ctrl.logout);
router.patch(
  '/',
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.updateSubcription
);

module.exports = router;