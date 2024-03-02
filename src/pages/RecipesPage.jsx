import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import recipe1 from "../assets/padthai.jpeg";
import recipe2 from "../assets/spanakopita.jpeg";
import recipe3 from "../assets/pan-fried.jpeg";
import recipe4 from "../assets/Avocado-tomato.jpeg";
import { useRecipe } from "../contexts/recipe-context";

const RecipesPage = () => {
  const navigate = useNavigate();

  const { getAllPublishedRecipes } = useRecipe();

  const [recipeData, setRecipeData] = useState([]);

  // Effect to fetch logged-in user's information when the component mounts
  useEffect(() => {
    const allRecipes = getAllPublishedRecipes();

    if (allRecipes) {
      setRecipeData(allRecipes);
    }
  }, [getAllPublishedRecipes]);

  return (
    <>
      <section className="bg-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">
            Popular Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {recipeData.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                onClick={() => navigate(recipe.id)}
              >
                <img
                  src={recipe1}
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
            <Link to="/previous-page">
              <button className="bg-rk-alto-950 text-rk-masala-50 px-4 py-2 rounded-md text-sm font-medium mr-4">
                Previous Page
              </button>
            </Link>
            <Link to="/next-page">
              <button className="bg-rk-alto-950 text-rk-masala-50 px-4 py-2 rounded-md text-sm font-medium">
                Next Page
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipesPage;
