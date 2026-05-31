import { Link } from 'react-router-dom'
function ProductCard({ product }) {
  return (
   <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">

        <h2 className="text-xl font-semibold">
          {product.title}
        </h2>

        <p className="text-blue-600 font-bold text-lg mt-2">
          ${product.price}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add To Cart
        </button>

      </div>
    </div>   
     </Link>
    
  )
}

export default ProductCard