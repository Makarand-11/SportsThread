import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import sampleJersey from '../Assets/sample-jersey.jpg';

// Sample product data
const products = [
  { id: 1, name: 'Jersey A', price: '$30', image: sampleJersey },
  { id: 2, name: 'Jersey B', price: '$40', image: sampleJersey },
  { id: 3, name: 'Jersey C', price: '$50', image: sampleJersey },
  // Add more products as needed
];

const Shop = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Shop</h1>
        <Link to="/cart" className="text-gray-700 hover:text-blue-500 transition duration-300 flex items-center">
          <FiShoppingCart className="w-6 h-6" aria-hidden="true" />
          <span className="ml-2 text-lg">Cart</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="w-full h-60 overflow-hidden"> {/* Adjust height as needed */}
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className="w-full h-full object-contain rounded-lg border border-gray-300 shadow-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4 text-lg">{product.price}</p>
              <Link to={`/product/${product.id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
