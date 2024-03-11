import React from "react";

import Benefit1 from "./assets/Benefit1.png";
import Benefit2 from "./assets/Benefit2.png";
import Benefit3 from "./assets/Benefit3.png";

const Benefits = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl lg:text-4xl font-bold text-gray-800 mb-4 ">
          Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-rk-geraldine-100 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center gap-4 p-6">
            <img
              src={Benefit1}
              alt="Benefit 1"
              className="w-48 h-48 object-cover object-center rounded-full"
            />
            <h1 className="text-2xl font-semibold text-gray-800 self-start">
              Recipe for Good Health
            </h1>
            <p className="text-lg text-gray-600 ">
              Easy recipes make your life convenient and keep you fit forever.
            </p>
          </div>
          <div className="bg-rk-primrose-50 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center gap-4 p-6">
            <img
              src={Benefit2}
              alt="Benefit 2"
              className="w-48 h-48 object-cover object-center rounded-full"
            />
            <h1 className="text-2xl font-semibold text-gray-800 self-start">
              Cooking with Less
            </h1>
            <p className="text-lg text-gray-600 ">
              Budget friendly recipes make you and your family happy.
            </p>
          </div>
          <div className="bg-rk-biloba-flower-50 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center gap-4 p-6">
            <img
              src={Benefit3}
              alt="Benefit 3"
              className="w-48 h-48 object-cover object-center rounded-full"
            />
            <h1 className="text-2xl font-semibold text-gray-800 self-start">
              Effortless Cooking
            </h1>
            <p className="text-lg text-gray-600 ">
              Get recipes fit for specific to personal preferences,and
              nutritional goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
