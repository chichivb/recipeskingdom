import React from "react";
import heroImage from "./assets/placholder.png"; // Import your hero image

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Cooking Made Easy
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Join +1,000 others and cook your way to better, faster, and tastier
            meals.
          </p>
          <button className="hover:text-rk-alto-950 px-3 py-2 rounded-md text-sm font-medium">
            LOG IN
          </button>
          <button className="bg-rk-alto-950 text-rk-masala-50 px-4 py-2 rounded-md text-sm font-medium">
            RECIPES
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Hero" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
