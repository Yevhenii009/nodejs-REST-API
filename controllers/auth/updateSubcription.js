const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const updateSubcription = async (req, res) => {
  const { subscription: newSubscription } = req.body;
  console.log(req.body);
  const { _id, subscription } = req.user;

  if (subscription === newSubscription) {
    throw HttpError(400, 'User already has such subscription');
  }
  const user = await User.findByIdAndUpdate(_id, req.body, { new: true });
  res.status(200).json(user);
};

module.exports = updateSubcription;