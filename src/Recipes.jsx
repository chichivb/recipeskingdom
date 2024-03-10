import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getAllPublishedRecipes } from "./helpers";

const Recipes = () => {
  const [recipeData, setRecipeData] = useState([]);

  // Effect to fetch logged-in user's information when the component mounts
  useEffect(() => {
    const allRecipes = getAllPublishedRecipes();

    if (allRecipes) {
      setRecipeData(allRecipes);
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-1 py-8">
            Popular Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {recipeData.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={recipe.heroImage}
                  alt={`Recipe ${recipe.id}`}
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
            <button className=" bg-rk-alto-950 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 mr-2">
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
