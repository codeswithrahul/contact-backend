const { fetchUsers, createUserService } = require("../services/user.service");

exports.getUsers = async (req, res) => {
  try {
    const users = await fetchUsers();
    res.json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email ,messages} = req.body;

    if (!name || !email || !messages) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required"
      });
    }
    const user = await createUserService({ name, email,messages });
    res.status(201).json({
      success: true,
      message: "message sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
