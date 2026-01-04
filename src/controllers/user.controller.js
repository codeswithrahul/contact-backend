// user.controller.js
const { fetchUsers } = require("../services/user.service");

exports.getUsers = (req, res) => {
  const users = fetchUsers();
  res.json({
    success: true,
    data: users
  });
};


exports.createUser = (req, res) => {
    const { name, email } = req.body;
  
    // Basic validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required"
      });
    }
  
    const user = createUserService({ name, email });
  
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
    });
  };