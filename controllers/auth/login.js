const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const { SECRET_KEY } = process.env;

  if (!user) {
    throw HttpError(401);
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401);
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  const result = await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    token: token,
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = login;