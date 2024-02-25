import React, { useState } from "react";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";
import { useModal } from "./contexts/modal-context";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { openModal } = useModal();

  const handleLoginClick = () => {
    openModal(<LoginModal />);
  };

  const handleSignupClick = () => {
    openModal(<SignupModal />);
  };

  return (
    <nav className="text-rk-alto-300 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-start">
            <div className="w-3/4 md:w-full">
              <Link to="/">
                <img src={Logo} alt="Logo" className="w-fit-content" />
              </Link>
            </div>
            <div className="text-gray-400 text-center"></div>
          </div>

          <div className="col-span-2 flex justify-center items-center">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/recipes"
                  className="text-gray-400 hover:text-white mr-6"
                >
                  All Recipes
                </Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link
                    to="/admin"
                    className="text-gray-400 hover:text-white mr-6"
                  >
                    List your recipe
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="col-span-1 text-gray-400 flex justify-end items-center">
            <nav>
              <div className="col-span-2 flex justify-center items-center">
                <button
                  className="hover:text-rk-alto-950 px-4 py-3 rounded-md text-sm font-medium"
                  onClick={handleLoginClick}
                >
                  LOG IN
                </button>
                <button
                  className="bg-rk-alto-950 text-rk-masala-50 px-5 py-3 rounded-md text-sm font-medium"
                  onClick={handleSignupClick}
                >
                  SIGN UP
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
