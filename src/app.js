const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS 
app.use(cors());

// Parse JSON
app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

module.exports = app;
