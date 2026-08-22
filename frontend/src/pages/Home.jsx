import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  // Show only first 4 featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* ================= Hero Section ================= */}
      <section className="grid md:grid-cols-2 items-center gap-10 py-16">
        {/* Left Side */}
        <div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Discover The Best Products For Your Lifestyle
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Shop the latest trends with amazing discounts and premium quality
            products.
          </p>

          <Link
            to="/products"
            className="
              inline-block
              mt-8
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-blue-700
              hover:scale-105
              transition
              duration-300
            "
          >
            Shop Now
          </Link>
        </div>

        {/* Right Side */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Smart Watch"
            className="
              w-full
              h-[500px]
              object-cover
              shadow-lg
              hover:scale-105
              transition
              duration-500
            "
          />
        </div>
      </section>

      {/* ================= Featured Products ================= */}
      <section className="mt-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>

          <Link
            to="/products"
            className="
              text-blue-600
              font-semibold
              hover:text-blue-800
              transition
              duration-300
            "
          >
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;