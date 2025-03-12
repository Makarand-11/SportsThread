import { useState } from 'react';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      
      {/* Navigation Links */}
      <div className="space-y-4 mb-6">
        <button
          onClick={() => handleSectionChange('dashboard')}
          className={`block w-full text-left py-2 px-4 rounded transition ${activeSection === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Dashboard
        </button>
        <button
          onClick={() => handleSectionChange('profile')}
          className={`block w-full text-left py-2 px-4 rounded transition ${activeSection === 'profile' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Profile
        </button>
        <button
          onClick={() => handleSectionChange('orders')}
          className={`block w-full text-left py-2 px-4 rounded transition ${activeSection === 'orders' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Orders
        </button>
        <button
          onClick={() => handleSectionChange('settings')}
          className={`block w-full text-left py-2 px-4 rounded transition ${activeSection === 'settings' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Account Settings
        </button>
      </div>

      {/* Section Content */}
      <div className="bg-white p-6 rounded shadow-md">
        {activeSection === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <p>Welcome to your dashboard. Here you can view your recent activity and manage your account.</p>
          </div>
        )}

        {activeSection === 'profile' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="john.doe@example.com" />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input type="tel" className="w-full p-2 border rounded" placeholder="123-456-7890" />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Update Profile
              </button>
            </form>
          </div>
        )}

        {activeSection === 'orders' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
            <p>You can view your past and current orders here.</p>
            {/* Display order history here */}
          </div>
        )}

        {activeSection === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
            <p>Manage your account settings here, such as password and notification preferences.</p>
            {/* Add form fields for account settings */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
