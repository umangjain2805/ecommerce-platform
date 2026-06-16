import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

function Products() {
  // Search state
  const [search, setSearch] = useState("");

  // Category state
  const [category, setCategory] = useState("All");

  // Create unique categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div>
      {/* Page Heading */}
      <h1 className="text-4xl font-bold mb-8">
        Our Products
      </h1>

      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="md:w-60 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-xl text-gray-500">
            No products found.
          </h2>
        </div>
      )}
    </div>
  );
}

export default Products;