import React from "react";
import recipe1 from "./assets/padthai.jpeg";
import picture1 from "./assets/MonikaBlack.png";
import picture2 from "./assets/JanniferJohnson.png";
import picture3 from "./assets/JohnJackson.png";

const Testimonial = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-8xl lg:text-4xl font-bold text-gray-800 mb-4">
          Testimonial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}

          <div className="bg-rk-geraldine-100 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <img
                src={picture1}
                alt="Recipe 1"
                className="w-24 h-24 object-cover object-left rounded-full"
              />
              <p className="text-lg text-gray-600 py-4">
                I love salad recieps from RecipesKingdom. Now I eat greener
                healtier and feel great with my health!
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-right">
                Monika Black
              </h3>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-rk-primrose-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <img
                src={picture2}
                alt="Recipe 1"
                className="w-24 h-24 object-cover object-left rounded-full"
              />
              <p className="text-lg text-gray-600 py-4">
                RecipesKingdom has gotten me back in the kitchen, eating good
                and healthy foods and I AM LOVING IT!
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-right">
                Jannifer Johnson
              </h3>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-rk-biloba-flower-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <img
                src={picture3}
                alt="Recipe 1"
                className="w-24 h-24 object-cover object-left rounded-full"
              />
              <p className="text-lg text-gray-600 py-4">
                I used one of the recipe tonight and was a resounding success. I
                will the fish recipe next week and see if my family like it.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-right">
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
