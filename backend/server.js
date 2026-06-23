// Load environment variables from .env file
require("dotenv").config();

// Import Express
const express = require("express");

// Import Product Routes
const productRoutes = require("./routes/productRoutes");

const authRoutes = require("./routes/authRoutes");

// Import Custom Middleware
const loggerMiddleware = require("./middleware/loggerMiddleware");

// Import Database Connection (for MongoDB later)
const connectDB = require("./config/db");

// Create Express App
const app = express();

// Connect MongoDB Database
// (Can be commented out until MongoDB is working)
// connectDB();

// Middleware
// Logs every incoming request
app.use(loggerMiddleware);

// Parses JSON data from requests
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
res.send("Server is Running 🚀");
});

// Product Routes
// All product routes start with /api/products
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
