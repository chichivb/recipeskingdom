import React from "react";
import recipe1 from "./assets/padthai.jpeg";
import recipe2 from "./assets/spanakopita.jpeg";
import recipe3 from "./assets/pan-fried.jpeg";
import recipe4 from "./assets/Avocado-tomato.jpeg";
import { useNavigate } from "react-router-dom";

const SubHeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          Popular Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={recipe1}
              alt="Recipe 1"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recipe 1
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={recipe2}
              alt="Recipe 2"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recipe 2
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={recipe3}
              alt="Recipe 2"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recipe 3
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={recipe4}
              alt="Recipe 2"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recipe 4
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={recipe1}
              alt="Recipe 1"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recipe 1
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={recipe2}
              alt="Recipe 2"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recipe 2
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={recipe3}
              alt="Recipe 2"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recipe 3
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={recipe4}
              alt="Recipe 2"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recipe 4
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-rk-alto-950 text-rk-masala-50 px-4 py-2 rounded-md text-sm font-medium"
            onClick={() => navigate("/recipes")}
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubHeroSection;
