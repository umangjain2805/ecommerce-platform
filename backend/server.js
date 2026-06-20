const express = require("express");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Running 🚀");
});

// Product Routes
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});