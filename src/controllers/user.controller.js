// user.controller.js
const { createUserService } = require("../services/user.service");
const { fetchUsers } = require("../services/user.service");

exports.getUsers = (req, res) => {
  const users = fetchUsers();
  res.json({
    success: true,
    data: users
  });
};


exports.createUser = (req, res) => {
    try {
      const { name, email } = req.body;
  
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
    } catch (error) {
      console.error("Create user error:", error);
  
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message
      });
    }
  };
  