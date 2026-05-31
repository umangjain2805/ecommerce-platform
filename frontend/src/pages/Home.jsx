import products from '../data/products'
import ProductCard from '../components/ProductCard/ProductCard'
function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 py-16">

        {/* Left Content */}
        <div>
          <h1 className="text-7xl font-bold leading-tight ">
            Discover The Best Products For Your Lifestyle
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Shop the latest trends with amazing discounts and premium quality products.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Hero"
            className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
          />
        </div>

      </section>


{/* Featured Products */}
<section className="mt-20">

  <div className="flex justify-between items-center mb-10">
    <h2 className="text-3xl font-bold">
      Featured Products
    </h2>

    <button className="text-blue-600 font-semibold">
      View All
    </button>
  </div>

  {/* Products Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}

  </div>

</section>


    </div>
  )
}

export default Home