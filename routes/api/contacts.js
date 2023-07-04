const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})
router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})
router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})
router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

const express = require("express");
// const router = express.Router();
const contactsController = require("../../controllers/contacts-controllers");
const { schemas } = require("../../models/contact");
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
