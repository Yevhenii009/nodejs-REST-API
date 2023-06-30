const { Schema } = require('mongoose');
const { MongooseError } = require('../../helpers');
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      mattch: emailRegExp,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.post('save', MongooseError);

module.exports = userSchema;