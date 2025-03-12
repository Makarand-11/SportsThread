import { useState } from "react"; 
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 
import logo from "../assets/logo.png";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "./AuthContent"; 

const Header = () => {
  const { user, logout } = useAuth(); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-10">
            <img src={logo} alt="SportsThread Logo" className="h-10 w-auto object-contain" />
            <span className="text-2xl font-bold text-white">SportsThread</span>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link>
            <Link to="/shop" className="text-gray-300 hover:text-blue-400 transition duration-300">Shop</Link>
            <HashLink smooth to="/#about" className="text-gray-300 hover:text-blue-400 transition duration-300">About</HashLink>
            <HashLink smooth to="/#contact" className="text-gray-300 hover:text-blue-400 transition duration-300">Contact</HashLink>

            {user && user.role === 'admin' && (
              <Link to="/admin" className="text-gray-300 hover:text-blue-400 transition duration-300">Admin Panel</Link>
            )}
            {/* Signup Link */}
            {!user && (
              <Link to="/signup" className="text-gray-300 hover:text-blue-400 transition duration-300">Sign Up</Link>
            )}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jerseys..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-600 rounded-full focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition duration-300 bg-gray-800 text-white"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            <Link to="/cart" className="text-gray-300 hover:text-blue-400 transition duration-300 relative">
              <FiShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
            </Link>
            <Link to="/account" className="text-gray-300 hover:text-blue-400 transition duration-300">
              <FiUser className="w-6 h-6" />
            </Link>
            {user ? (
              <button onClick={logout} className="text-gray-300 hover:text-blue-400 transition duration-300">Logout</button>
            ) : (
              <Link to="/login" className="text-gray-300 hover:text-blue-400 transition duration-300">Login</Link>
            )}
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FiX className="w-6 h-6 text-white" /> : <FiMenu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden">
            <nav className="flex flex-col space-y-2 p-4 bg-gray-900 shadow-lg">
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link>
              <Link to="/shop" className="text-gray-300 hover:text-blue-400 transition duration-300">Shop</Link>
              <HashLink smooth to="/#about" className="text-gray-300 hover:text-blue-400 transition duration-300">About</HashLink>
              <HashLink smooth to="/#contact" className="text-gray-300 hover:text-blue-400 transition duration-300">Contact</HashLink>

              {user && user.role === 'admin' && (
                <Link to="/admin" className="text-gray-300 hover:text-blue-400 transition duration-300">Admin Panel</Link>
              )}

              {!user && (
                <Link to="/signup" className="text-gray-300 hover:text-blue-400 transition duration-300">Sign Up</Link>
              )}

              {user ? (
                <button onClick={logout} className="text-gray-300 hover:text-blue-400 transition duration-300">Logout</button>
              ) : (
                <Link to="/login" className="text-gray-300 hover:text-blue-400 transition duration-300">Login</Link>
              )}
            </nav>

            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jerseys..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-full focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition duration-300 bg-gray-800 text-white"
                />
                <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
