import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = useContext(CartContext);
const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
  return (
    
    <div>
      
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2 className="text-xl text-gray-500">
          Your cart is empty.
        </h2>
      ) : (
        <div className="space-y-6">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white p-4 rounded-xl shadow"
            >

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-lg"
              />

              {/* Product Info */}
              <div className="flex-1">

                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-blue-600 font-bold mt-2">
                  ${item.price}
                </p>

               
               <div className="flex items-center gap-4 mt-4">

  <button
    onClick={() => decreaseQuantity(item.id)}
    className=" text-black px-3 py-1 rounded"
  >
    -
  </button>

  <span className="font-bold text-lg">
    {item.quantity}
  </span>

  <button
    onClick={() => increaseQuantity(item.id)}
    className=" text-black px-3 py-1 rounded"
  >
    +
  </button>
  <button
  onClick={() => removeFromCart(item.id)}
  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
>
  Remove
</button>

</div>
               

              </div>
              

            </div>
            
          ))}
<div className="mt-8 text-right">

  <h2 className="text-3xl font-bold">
    Total: ${totalPrice}
  </h2>

</div>
        </div>
      )}
    </div>
  );
}

export default Cart;