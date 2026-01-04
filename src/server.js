require("dotenv").config(); // ✅ top pe

const connectDB = require("./config/db");
const app = require("./app");

// DB connect
connectDB();

module.exports = app;
