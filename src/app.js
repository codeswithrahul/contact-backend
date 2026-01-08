const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS 
app.use(cors());

// Parse JSON
app.use(express.json());

const userRoutes = require("./routes/user.routes");
const contactRoutes = require("./routes/contact.routes");

app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);

module.exports = app;
