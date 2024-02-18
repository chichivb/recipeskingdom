import React from "react";
import Logo from "./assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="py-3 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="md:w-1/2">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="h-px bg-gray-600 mx-4"></div> {/* Line */}
        </div>
        <div className="flex-grow flex justify-center">
          <a
            href="#"
            className="
      text-rk-masala-950 hover:text-rk-masala-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Recipes
          </a>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="hover:text-rk-alto-950 px-3 py-2 rounded-md text-sm font-medium">
            LOG IN
          </button>
          <button className="bg-rk-alto-950 text-rk-masala-50 px-4 py-2 rounded-md text-sm font-medium">
            SIGN UP
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
