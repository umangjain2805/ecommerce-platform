import { useState } from "react";
import products from "../data/products";
import SkeletonCard from "../components/Loader/SkeletonCard";
import ProductCard from "../components/ProductCard/ProductCard";

function Products() {

  // Search input state
  const [search, setSearch] = useState("");

  // Category filter state
  const [category, setCategory] = useState("All");

  // Sorting state
  const [sortBy, setSortBy] = useState("");

  const [visibleProducts, setVisibleProducts] = useState(4);

  // Get all unique categories from products
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

const loadMoreProducts = () => {
  setVisibleProducts((prev) => prev + 4);
};


  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {

      // Check if product title matches search
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      // Check if selected category matches
      const matchCategory =
        category === "All" ||
        product.category === category;

      // Product must match both conditions
      return matchSearch && matchCategory;
    })

    // Sorting logic
    .sort((a, b) => {

      // Price low to high
      if (sortBy === "low-high") {
        return a.price - b.price;
      }

      // Price high to low
      if (sortBy === "high-low") {
        return b.price - a.price;
      }

      // Highest rated products first
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      // Alphabetical sorting
      if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }

      // Default order
      return 0;
    });


  return (
    <div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">
        Our Products
      </h1>


      {/* Filters Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">


        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg 
          outline-none focus:ring-2 focus:ring-blue-500"
        />


        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="md:w-52 px-4 py-3 border rounded-lg 
          outline-none focus:ring-2 focus:ring-blue-500"
        >
          {
            categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))
          }
        </select>


        {/* Sorting Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="md:w-52 px-4 py-3 border rounded-lg 
          outline-none focus:ring-2 focus:ring-blue-500"
        >

          <option value="">
            Sort By
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rating
          </option>

          <option value="name">
            Name: A-Z
          </option>

        </select>

      </div>


      {/* Product Grid */}
      {
        filteredProducts.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {
             filteredProducts
  .slice(0, visibleProducts)
  .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            }

          </div>

        ) : (

          <div className="text-center py-10">

            <h2 className="text-xl text-gray-500">
              No products found.
            </h2>

          </div>

        )
      }
{
  visibleProducts < filteredProducts.length && (
    <div className="text-center mt-10">
      <button
        onClick={loadMoreProducts}
        className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-blue-700
          transition
        "
      >
        Load More
      </button>
    </div>
  )
}
    </div>
  );
}

export default Products;