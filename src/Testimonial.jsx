import React from "react";
import recipe1 from "./assets/padthai.jpeg";

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <img
                src={recipe1}
                alt="Recipe 1"
                className="w-24 h-24 object-cover object-left rounded-full"
              />
              <p className="text-sm text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus lacinia odio eu ligula consequat, sed convallis mi."
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                John Doe
              </h3>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <img
                src={recipe1}
                alt="Recipe 1"
                className="w-24 h-24 object-cover object-left rounded-full"
              />
              <p className="text-sm text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus lacinia odio eu ligula consequat, sed convallis mi."
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                John Doe
              </h3>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <img
                src={recipe1}
                alt="Recipe 1"
                className="w-24 h-24 object-cover object-left rounded-full"
              />
              <p className="text-sm text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus lacinia odio eu ligula consequat, sed convallis mi."
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                John Doe
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
