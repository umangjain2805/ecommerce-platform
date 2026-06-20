const products = require("../data/products");

// GET /api/products
const getProducts = (req, res) => {
  res.json(products);
};

// GET /api/products/:id
const getProductById = (req, res) => {
  const product = products.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
};

module.exports = {
  getProducts,
  getProductById,
};
module.exports = {
  getProducts,
  getProductById,
};