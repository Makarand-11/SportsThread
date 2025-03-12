import { useParams } from 'react-router-dom';
import { useState } from 'react';
import sampleJersey from '../assets/sample-jersey.jpg';

// Sample product data
const products = [
  { 
    id: 1, 
    name: 'Jersey 1', 
    price: '$50', 
    description: 'High-quality jersey', 
    image: sampleJersey,
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% Polyester',
    careInstructions: 'Machine wash cold, tumble dry low.'
  },
  { 
    id: 2, 
    name: 'Jersey 2', 
    price: '$60', 
    description: 'Comfortable and stylish', 
    image: sampleJersey,
    sizes: ['S', 'M', 'L'],
    material: 'Cotton Blend',
    careInstructions: 'Hand wash cold, hang dry.'
  },
  { 
    id: 3, 
    name: 'Jersey 3', 
    price: '$70', 
    description: 'Breathable fabric', 
    image: sampleJersey,
    sizes: ['M', 'L', 'XL', 'XXL'],
    material: 'Nylon',
    careInstructions: 'Machine wash warm, tumble dry low.'
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id, 10));
  const [cart, setCart] = useState([]); // Cart state

const addToCart = () => {
  // Check if the product is already in the cart
  const productInCart = cart.find(item => item.id === product.id);

  if (productInCart) {
    // If it exists, update the quantity
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  } else {
    // If it doesn't exist, add it to the cart with a quantity of 1
    setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
  }

  alert(`${product.name} added to the cart!`);
};


  if (!product) {
    return <h2 className="text-center text-red-600">Product not found</h2>;
  }

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div className="w-full h-80 overflow-hidden">
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className="w-full h-full object-contain rounded-lg border border-gray-300 shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{product.price}</p>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Available Sizes</h2>
              <ul className="list-disc list-inside text-gray-700">
                {product.sizes.map(size => (
                  <li key={size}>{size}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Material</h2>
              <p className="text-gray-700">{product.material}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Care Instructions</h2>
              <p className="text-gray-700">{product.careInstructions}</p>
            </div>
            
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              onClick={addToCart}
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );  
}

export default ProductDetails;
