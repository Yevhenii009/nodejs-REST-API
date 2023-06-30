const {
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact,
} = require('./contacts');

const {
  register,
  login,
  getCurrent,
  logout,
  updateSubcription,
} = require('./auth');

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
  updateStatusContact,
  register,
  login,
  getCurrent,
  logout,
  updateSubcription,
};