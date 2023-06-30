const getAll = require('./getAll');
const getById = require('./getById');
const add = require('./add');
const remove = require('./remove');
const update = require('./update');
const updateStatusContact = require('./updateStatus');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  remove: ctrlWrapper(remove),
  update: ctrlWrapper(update),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};