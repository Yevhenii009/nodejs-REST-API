const express = require("express");
const ctrl = require("../../controllers/auth");
const {
  validateBody,
  autenticate,
  isValidIdSubscription,
} = require("../../decorators");
const { schemas } = require("../../models/users");

const router = express.Router();
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", autenticate, ctrl.getCurrent);
router.patch(
  "/:subscription",
  autenticate,
  isValidIdSubscription,
  ctrl.updateUser
);
router.post(
  "/logout",
  autenticate,
  validateBody(schemas.loginSchema),
  ctrl.logout
);

module.exports = router;