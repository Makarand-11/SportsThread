import React, { createContext, useContext, useState } from 'react';

// Create the Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Set user data including roles
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async (userData) => {
    // Simulate a signup process (replace with real API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // On successful signup, set user data
    const newUser = { ...userData, role: 'user' }; // Default role can be user
    login(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
