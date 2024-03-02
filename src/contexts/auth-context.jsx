// auth-context.js
import { v4 as uuidv4 } from 'uuid';
import React, { createContext, useContext, useEffect, useState } from "react";
import { getItem, setItem, removeItem } from "../storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = getItem("loggedInUser");
  
    if (loggedInUser) {
        setIsLoggedIn(true)
    }
}, []);
  const register = (username, email, password) => {
    const users = getItem("users") || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return false;
    }

    const newUser = {
      username: username,
      email: email,
      password: password,
      userId: uuidv4(),
    };

    users.push(newUser);
    setItem("users", users);
    setItem("loggedInUser", newUser);
    setIsLoggedIn(true);

    return true;
  };

  const login = (email, password) => {
    const users = getItem("users") || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setItem("loggedInUser", user);
      setIsLoggedIn(true);
      return true; // Login successful
    } else {
      setIsLoggedIn(false);

      return false; // Login failed
    }
  };

  const logout = () => {
    removeItem("loggedInUser");
    setIsLoggedIn(false);
  };

  const getLoggedInUser = () => {
    return getItem("loggedInUser");
  };

  return (
    <AuthContext.Provider
      value={{ register, login, logout, getLoggedInUser, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
