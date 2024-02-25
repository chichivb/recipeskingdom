import React, { useEffect } from "react";

const LoginModal = () => {
  const handleCloseModalClick = () => {
    console.log("looogin modal");
    //   closeModal();
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation(); // Prevent event propagation
  };

  return (
    <div className="px-8 py-4">
      <h1 className="text-2xl mb-4">Login</h1>

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
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
