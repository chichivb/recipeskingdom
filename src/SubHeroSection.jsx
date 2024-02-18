import React from "react";
import recipe1 from "./assets/padthai.jpeg";
import recipe2 from "./assets/padthai.jpeg";
import recipe3 from "./assets/padthai.jpeg";
import recipe4 from "./assets/padthai.jpeg";

const SubHeroSection = () => {
  return (
    <section className="bg-gray-200 py-20">
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
        </div>
        <div className="flex justify-end mt-8">
          <button className="bg-dark text-white px-6 py-3 rounded-md text-lg font-medium">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubHeroSection;
