import React from "react";
import heroImage from "./assets/cooking.png";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-8">
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-10xl lg:text-5xl font-bold text-gray-800 mb-4">
              Cooking Made Easy
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Access over +1,000 recipes and enjoy cooking your way!
            </p>
          </div>

          <div className="col-span-1">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full rounded-lg object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
