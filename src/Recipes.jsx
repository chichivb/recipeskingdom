import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import recipe1 from "./assets/padthai.jpeg";
import recipe2 from "./assets/spanakopita.jpeg";
import recipe3 from "./assets/pan-fried.jpeg";
import recipe4 from "./assets/Avocado-tomato.jpeg";

const Recipes = () => {
  const recipeData = [
    { image: recipe1, title: "Recipe 1", description: "Description 1" },
    { image: recipe2, title: "Recipe 2", description: "Description 2" },
    { image: recipe3, title: "Recipe 3", description: "Description 3" },
    { image: recipe4, title: "Recipe 4", description: "Description 4" },
    { image: recipe1, title: "Recipe 5", description: "Description 5" },
    { image: recipe2, title: "Recipe 6", description: "Description 6" },
    { image: recipe3, title: "Recipe 7", description: "Description 7" },
    { image: recipe4, title: "Recipe 8", description: "Description 8" },
    { image: recipe1, title: "Recipe 9", description: "Description 9" },
    { image: recipe2, title: "Recipe 10", description: "Description 10" },
    { image: recipe3, title: "Recipe 11", description: "Description 11" },
    { image: recipe4, title: "Recipe 12", description: "Description 12" },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">
            Popular Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {recipeData.map((recipe, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={recipe.image}
                  alt={`Recipe ${index + 1}`}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-gray-600">{recipe.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-rk-alto-950 text-rk-masala-50 px-4 py-2 rounded-md text-sm font-medium">
              VIEW MORE
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Recipes;
