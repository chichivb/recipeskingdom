import React from "react";
import recipe1 from "./assets/padthai.jpeg";
import picture1 from "./assets/MonikaBlack.png";
import picture2 from "./assets/JanniferJohnson.png";
import picture3 from "./assets/JohnJackson.png";

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <img
                src={picture1}
                alt="Recipe 1"
                className="w-24 h-24 object-cover object-left rounded-full"
              />
              <p className="text-sm text-gray-600">
                "I love salad recieps from RecipesKingdom and now I have much
                healtier diet!"
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Monika Black
              </h3>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <img
                src={picture2}
                alt="Recipe 1"
                className="w-24 h-24 object-cover object-left rounded-full"
              />
              <p className="text-sm text-gray-600">
                "RecipesKingdom has gotten me back in the kitchen, eating good
                and healthy foods and saving money in the process!! LOVE IT!!"
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Jannifer Johnson
              </h3>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <img
                src={picture3}
                alt="Recipe 1"
                className="w-24 h-24 object-cover object-left rounded-full"
              />
              <p className="text-sm text-gray-600">
                "I used one of the recipe tonight and was a resounding success."
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                John Jackson
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
