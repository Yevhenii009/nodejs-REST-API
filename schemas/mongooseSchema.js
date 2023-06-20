const { Schema } = require('mongoose');
const { MongooseError } = require('../helpers');

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: [true, 'Set email for contact'],
      mattch: emailRegExp,
    },
    phone: {
      type: String,
      mattch: phoneRegExp,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', MongooseError);

module.exports = contactSchema;