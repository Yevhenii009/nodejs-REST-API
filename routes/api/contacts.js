const express = require("express");
const router = express.Router();
const contactsController = require("../../controllers/contacts-controllers");
const { schemas } = require("../../models/contacts");
const { validateBody, isValidId, autenticate } = require("../../decorators");

router.get("/", autenticate, contactsController.getAllContacts);
router.get(
  "/:contactId",
  autenticate,
  isValidId,
  contactsController.getContactById
);
router.post(
  "/",
  autenticate,
  validateBody(schemas.addSchema),
  contactsController.addNewContact
);
router.put(
  "/:contactId",
  autenticate,
  isValidId,
  validateBody(schemas.addSchema),
  contactsController.updateContactById
);
router.patch(
  "/:contactId/favorite",
  autenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateFavorite
);
router.delete(
  "/:contactId",
  autenticate,
  isValidId,
  contactsController.deleteContactById
);

module.exports = router;
