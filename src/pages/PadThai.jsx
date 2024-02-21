import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import recipe1 from "../assets/padthai.jpeg";

const PadThai = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Right Column: Ingredient List */}
          <div>
            <h1 className="text-5xl lg:text-5xl font-bold text-gray-800 mb-4">
              Pad Thai with King Prawns
            </h1>
            <button className="text-xl text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rk-masala-500 focus:ring-opacity-50">
              30 minutes
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ingredients
            </h2>
            <ul className="text-2xl list-disc text-gray-600">
              <li>Rice noodles</li>
              <li>Bean sprouts</li>
              <li>Tofu</li>
              <li>Garlic</li>
              <li>Shrimp</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <img src={recipe1} alt="Padthai" className="w-full object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PadThai;
