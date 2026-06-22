const express = require("express");
const{ getProducts,getProductById,createProduct,} = require("../controllers/productController");
const router = express.Router();

// get all products
router.get("/", getProducts);

// GET single product
router.get("/:id", getProductById);

router.post("/", createProduct);

module.exports = router;