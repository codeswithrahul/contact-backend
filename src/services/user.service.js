const User = require("../models/user.model");

exports.createUserService = async ({ name, email }) => {
  const user = await User.create({ name, email });
  return user;
};

exports.fetchUsers = async () => {
  return await User.find();
};
