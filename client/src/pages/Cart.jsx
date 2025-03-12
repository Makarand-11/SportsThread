import { useState } from 'react';
import sampleJersey from '../assets/sample-jersey.jpg';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Sample cart data, you can replace it with actual cart data (context or redux)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Jersey 1', price: 50, image: sampleJersey, quantity: 1 },
    { id: 2, name: 'Jersey 2', price: 60, image: sampleJersey, quantity: 2 },
  ]);

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle increase quantity
  const increaseQuantity = (id) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Handle decrease quantity
  const decreaseQuantity = (id) => {
    const updatedItems = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Handle remove item from cart with confirmation
  const removeItem = (id) => {
    if (window.confirm('Are you sure you want to remove this item from the cart?')) {
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);
    }
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-700">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cartItems.map(item => (
              <div 
                key={item.id} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-transform transform hover:scale-105"
              >
                <div className="flex items-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-32 h-32 object-cover rounded-md border border-gray-300 shadow-sm"
                  />
                  <div className="ml-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-lg font-medium mt-1">${item.price}</p>
                    <div className="flex items-center mt-4">
                      <button 
                        onClick={() => decreaseQuantity(item.id)} 
                        className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span className="px-4 text-lg font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => increaseQuantity(item.id)} 
                        className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)} 
                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Total: <span className="text-blue-500">${calculateTotal()}</span></h3>
          <Link 
            to="/checkout" 
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
