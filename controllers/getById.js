const { HttpError } = require('../helpers');
const Contact = require('../models/contacts');

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw HttpError(404, 'Not Found');
  }
  res.json(contact);
};

module.exports = getById;