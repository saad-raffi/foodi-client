// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (email, password, firstName, image) => {
    // Implement signup logic here (e.g., API call to register user)
    // After successful signup, set currentUser with user data
    const user = { firstName, image }; // Example user object
    setCurrentUser(user);
  };

  const login = async (email, password) => {
    // Implement login logic here (e.g., API call to authenticate user)
    // After successful login, set currentUser with user data
    const user = { firstName: "John", image: "/user.jpg" }; // Example user object
    setCurrentUser(user);
  };

  const logout = async () => {
    // Implement logout logic here (e.g., API call to invalidate token)
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
