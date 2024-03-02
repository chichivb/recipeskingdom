import React, { useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { useModal } from "../contexts/modal-context";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { login } = useAuth();
  const { closeModal } = useModal();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement signup logic here
    console.log("Signing up:", { email, password });
    const response = login(email, password);
    if (response) {
      // modal close
      closeModal();
    }
    setError(true);
  };

  return (
    <div className="px-8 py-4">
      <h1 className="text-2xl mb-4">Login</h1>
      {error && <p className="text-red-500 mb-4">Wrong email or password</p>}

      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" bg-green-500 text-white py-2 px-4 rounded-md hover:bg-rk-alto-950 focus:outline-none focus:bg-indigo-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
