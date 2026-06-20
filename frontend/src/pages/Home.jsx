import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {

  // Show only first 4 products as featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <div>

      {/* ================= Hero Section ================= */}
      <section className="grid md:grid-cols-2 items-center gap-10 py-16">

        {/* Left Side - Text Content */}
        <div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Discover The Best Products For Your Lifestyle
          </h1>

          {/* Short Description */}
          <p className="text-gray-600 mt-6 text-lg">
            Shop the latest trends with amazing discounts and premium quality
            products.
          </p>

          {/* Shop Now Button */}
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


        {/* Right Side - Hero Product Image */}
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


      {/* ================= Featured Products Section ================= */}

      <section className="mt-20">

        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">

          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>


          {/* View all products button */}
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


        {/* Product Cards Grid */}
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