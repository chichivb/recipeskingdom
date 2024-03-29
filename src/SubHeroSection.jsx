import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPublishedRecipes } from "./helpers";

const SubHeroSection = () => {
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState([]);

  // Effect to fetch logged-in user's information when the component mounts
  useEffect(() => {
    const allRecipes = getAllPublishedRecipes();

    if (allRecipes) {
      setRecipeData(allRecipes);
    }
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl lg:text-4xl font-bold text-gray-800 mb-4">
          Popular Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {recipeData.slice(0, 8).map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              onClick={() => navigate("/recipes/" + recipe.id)}
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
          <button
            className="text-lg font-semibold text-white bg-green-500 px-6 py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={() => navigate("/recipes")}
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubHeroSection;
