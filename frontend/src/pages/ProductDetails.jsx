import { useParams } from 'react-router-dom'
import products from '../data/products'
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function ProductDetails() {

  const { id } = useParams()
 const { addToCart } = useContext(CartContext);
  const product = products.find(
    (item) => item.id === Number(id)
  )
  if (!product) {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">Product Not Found</h1>
    </div>
  )
}

  return (
    
<>
{/* const { addToCart } = useContext(CartContext); */}
<div className="mb-6">
  <Link
    to="/"
    className="text-blue-600 hover:text-blue-800 font-medium"
  >
    ← Back to Home
  </Link>
</div>
    <div className="grid md:grid-cols-2 gap-12 py-10">

      {/* Product Image */}
      <div>

        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-2xl shadow-lg h-[500px] object-cover"
        />

      </div>

      {/* Product Info */}
      <div>

        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <p className="text-blue-600 text-3xl font-bold mt-6">
          ${product.price}
        </p>

        <p className="text-gray-600 mt-6 leading-7">
          {product.description}
        </p>
<button
  onClick={() => addToCart(product)}
  className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
>
  Add To Cart
</button>

      </div>
      

    </div>
    </>
  )
}

export default ProductDetails