import { useState } from 'react';
import { useAuth } from '../components/AuthContent';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({ email, password }); // Call the signup function
      navigate('/dashboard'); // Redirect to dashboard on success
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6">Signup</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
