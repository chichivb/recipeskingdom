// auth-context.js
import { v4 as uuidv4 } from "uuid";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  saveToLocalStorage,
  receiveFromLocalStorage,
  removeFromLocalStorage,
} from "../helpers";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = receiveFromLocalStorage("loggedInUser");
    if (user) {
      setIsLoggedIn(true);
      setLoggedInUser(user);
    }
  }, []);

  const register = (username, email, password) => {
    const users = receiveFromLocalStorage("users") || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return false;
    }

    const newUser = {
      username: username,
      email: email,
      password: password,
      id: uuidv4(),
    };

    users.push(newUser);
    saveToLocalStorage("users", users);
    saveToLocalStorage("loggedInUser", newUser);
    setIsLoggedIn(true);
    setLoggedInUser(newUser);

    return true;
  };

  const login = (email, password) => {
    const users = receiveFromLocalStorage("users") || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      saveToLocalStorage("loggedInUser", user);
      setIsLoggedIn(true);
      setLoggedInUser(user);

      return true;
    } else {
      setIsLoggedIn(false);
      setLoggedInUser(null);

      return false; // Login failed
    }
  };

  const update = (updatedUser) => {
    const users = receiveFromLocalStorage("users") || [];
    const oldUser = users.find((user) => user.id === updatedUser.id);
    const newUser = {
      ...oldUser,
      ...updatedUser,
    };

    // Find location inside array where user excists
    const userIndex = users.findIndex((user) => user.id === newUser.id);
    if (userIndex !== -1) {
      users[userIndex] = newUser;
      saveToLocalStorage("users", users);
      saveToLocalStorage("loggedInUser", newUser);

      setLoggedInUser(newUser);
    }
  };

  const logout = () => {
    removeFromLocalStorage("loggedInUser");
    setIsLoggedIn(false);
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ register, login, logout, update, loggedInUser, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
