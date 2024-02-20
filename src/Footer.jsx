import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "./assets/Logo.png";

const Footer = () => {
  return (
    <footer className="text-rk-alto-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-start">
            <div className="w-3/4 md:w-full">
              <img src={Logo} alt="Logo" className="w-fit-content" />
            </div>
            <div className="text-gray-400 text-center"></div>
          </div>

          <div className="col-span-2 flex justify-center items-center">
            <a href="#" className="text-gray-400 hover:text-white mr-6">
              Recipes
            </a>
          </div>

          <div className="col-span-1 text-gray-400 flex justify-end items-center">
            <nav>
              <div className="col-span-2 flex justify-center items-center">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white mr-4 text-2xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white mr-4 text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white mr-4 text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="text-gray-400 text-center mt-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} RecipesKingdom. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
