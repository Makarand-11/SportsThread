import React, { useState } from 'react';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your server or handle the payment process
    console.log('Order submitted', formData);
    alert('Order placed successfully!');
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Checkout</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 font-semibold" htmlFor="address">Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="city">City</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="state">State</label>
              <input 
                type="text" 
                id="state" 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="zip">ZIP Code</label>
              <input 
                type="text" 
                id="zip" 
                name="zip" 
                value={formData.zip} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="cardNumber">Card Number</label>
              <input 
                type="text" 
                id="cardNumber" 
                name="cardNumber" 
                value={formData.cardNumber} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="expiryDate">Expiry Date</label>
              <input 
                type="text" 
                id="expiryDate" 
                name="expiryDate" 
                value={formData.expiryDate} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="cvv">CVV</label>
              <input 
                type="text" 
                id="cvv" 
                name="cvv" 
                value={formData.cvv} 
                onChange={handleChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                required 
              />
            </div>
          </div>

          <div className="mt-6">
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutPage;
