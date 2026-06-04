import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
function Navbar() {
  const { cartItems } = useContext(CartContext);

console.log(cartItems);
 const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        MyStore
      </Link>

      {/* Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            className="hover:text-blue-600 transition duration-300"
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            className="hover:text-blue-600 transition duration-300"
          >
            Cart ({totalItems})
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="hover:text-blue-600 transition duration-300"
          >
            Login
          </Link>
        </li>

        <li>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;