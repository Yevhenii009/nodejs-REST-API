const express = require('express');
const ctrl = require('../../controllers');
const schemas = require('../../schemas');
const { validateBody, validateId } = require('../../middlewares');
const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:contactId', validateId, ctrl.getById);
router.post('/', validateBody(schemas.addSchema), ctrl.add);
router.delete('/:contactId', validateId, ctrl.remove);
router.put(
  '/:contactId',
  validateId,
  validateBody(schemas.updSchema),
  ctrl.update
);
router.patch(
  '/:contactId/favorite',
  validateId,
  validateBody(schemas.favSchema),
  ctrl.updateStatusContact
);

module.exports = router;