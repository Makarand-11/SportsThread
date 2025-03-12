import sampleJersey from '../assets/sample-jersey.jpg';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Jersey 1', price: '$50', image: sampleJersey },
    { id: 2, name: 'Jersey 2', price: '$60', image: sampleJersey },
    { id: 3, name: 'Jersey 3', price: '$70', image: sampleJersey },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-md mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.price}</p>
              <a 
                href={`/product/${product.id}`} 
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
