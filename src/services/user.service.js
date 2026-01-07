const User = require("../models/user.model");

exports.fetchUsers = async () => {
  return await User.find().sort({ createdAt: -1 });
};

exports.createUserService = async (data) => {
  return await User.create(data);
};
