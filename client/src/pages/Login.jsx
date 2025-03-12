import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContent'; // Import Auth context

const Login = () => {
  const { login } = useAuth(); // Destructure login from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(''); // State to manage error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    setError(''); // Reset any previous error

    try {
      // Simulated login logic
      console.log('Email:', email);
      console.log('Password:', password);
      
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // On success, set user data in context and redirect
      login({ email }); // You can pass more user data if needed
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      // Handle errors (e.g., show an error message)
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
