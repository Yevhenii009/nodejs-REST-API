const { HttpError } = require('../helpers');
const Contact = require('../models/contacts');

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!contact) {
    throw HttpError(404, 'Not Found');
  }

  res.status(200).json(contact);
};

module.exports = updateStatusContact;