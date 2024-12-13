const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/v1/users", userRoutes);

module.exports = app;
