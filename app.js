const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");


const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/v1/users", userRoutes);

module.exports = app;
