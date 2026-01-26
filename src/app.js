const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

// Enable CORS 
app.use(cors());

// Parse JSON
app.use(express.json());

const userRoutes = require("./routes/user.routes");
const contactRoutes = require("./routes/contact.routes");
const parlourContactRoutes = require("./routes/parlourContact.routes");
const parlourReviewRoutes = require("./routes/parlourReview.routes");

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/parlour/contact", parlourContactRoutes);
app.use("/api/parlour/review", parlourReviewRoutes);

module.exports = app;
