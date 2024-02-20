import React from "react";
import bubble1 from "./assets/bubble1.png";

const Feature = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          Faster Better Tastier
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <img
              src={bubble1}
              alt="Recipe 1"
              className="w-200 h-200 object-cover object-center rounded-full"
            />
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio eu ligula consequat, sed convallis mi.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              John Doe
            </h3>
          </div>

          <div className="p-6">
            <img
              src={bubble1}
              alt="Recipe 1"
              className="w-200 h-200 object-cover object-center rounded-full"
            />
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio eu ligula consequat, sed convallis mi.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              John Doe
            </h3>
          </div>

          <div className="p-6">
            <img
              src={bubble1}
              alt="Recipe 1"
              className="w-200 h-200 object-cover object-center rounded-full"
            />
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio eu ligula consequat, sed convallis mi.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              John Doe
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
