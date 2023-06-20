const { HttpError } = require('../helpers');
const Contact = require('../models/contacts');

const remove = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndDelete(contactId);

  if (!contact) {
    throw HttpError(404, 'Not Found');
  }

  res.status(200).json({
    message: 'contact deleted',
  });
};

module.exports = remove;