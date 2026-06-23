// Import Product Data
const products = require("../data/products");

// ========================================
// GET ALL PRODUCTS
// Route: GET /api/products
// ========================================
const getProducts = (req, res) => {
res.json(products);
};

// ========================================
// GET SINGLE PRODUCT
// Route: GET /api/products/:id
// ========================================
const getProductById = (req, res) => {

// Find product using URL parameter
const product = products.find(
(item) => item.id === Number(req.params.id)
);

// Product not found
if (!product) {
return res.status(404).json({
message: "Product not found",
});
}

// Return product
res.json(product);
};

// ========================================
// CREATE PRODUCT
// Route: POST /api/products
// ========================================
const createProduct = (req, res) => {

// Data sent from Postman / Frontend
console.log(req.body);

res.status(201).json({
message: "Product Created",
product: req.body,
});
};

// ========================================
// UPDATE PRODUCT
// Route: PUT /api/products/:id
// ========================================
const updateProduct = (req, res) => {

// Find product
const product = products.find(
(item) => item.id === Number(req.params.id)
);

// Product not found
if (!product) {
return res.status(404).json({
message: "Product not found",
});
}

// Update product fields
Object.assign(product, req.body);

res.json({
message: "Product updated successfully",
product,
});
};

// ========================================
// DELETE PRODUCT
// Route: DELETE /api/products/:id
// ========================================
const deleteProduct = (req, res) => {

// Find product index
const index = products.findIndex(
(item) => item.id === Number(req.params.id)
);

// Product not found
if (index === -1) {
return res.status(404).json({
message: "Product not found",
});
}

// Remove product from array
products.splice(index, 1);

res.json({
message: "Product deleted successfully",
});
};

// Export All Controllers
module.exports = {
getProducts,
getProductById,
createProduct,
updateProduct,
deleteProduct,
};
