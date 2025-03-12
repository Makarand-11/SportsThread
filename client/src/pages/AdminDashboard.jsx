import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link
          to="/manage-users"
          className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Manage Users
        </Link>
        <Link
          to="/manage-products"
          className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Manage Products
        </Link>
        <Link
          to="/orders"
          className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          View Orders
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
