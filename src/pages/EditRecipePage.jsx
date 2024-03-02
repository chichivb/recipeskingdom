import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useAuth } from "../contexts/auth-context";
import { useRecipe } from "../contexts/recipe-context";

const EditRecipePage = () => {
  const { getLoggedInUser } = useAuth();
  const { getRecipeById, updateRecipe } = useRecipe();

  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    userId: "",
  });

  // Effect to fetch logged-in user's information when the component mounts
  useEffect(() => {
    const loggedInUser = getLoggedInUser();

    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [getLoggedInUser]);

  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    cookingTime: "15",
    servings: "2",
    ingredients: "",
    instructions: "",
    salePrice: "",
    heroImage: null,
    thumbnail: null,
  });

  // Effect to fetch logged-in user's information when the component mounts
  useEffect(() => {
    const allRecipes = getRecipeById(id);

    if (allRecipes) {
      setRecipeData(allRecipes);
    }
  }, [getRecipeById, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setRecipeData({ ...recipeData, heroImage: file });
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    // recipeData.userId = user.userId
    console.log("Recipe data:", recipeData);
    console.log("user.userId >> ", user.userId);
    updateRecipe(recipeData.id, recipeData);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <form className="space-y-4">
            <h1 className="text-5xl lg:text-5xl font-bold text-gray-800 mb-4">
              Add Recipe
            </h1>
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-semibold mb-2"
              >
                Name of the Recipe
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={recipeData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-lg font-semibold mb-2"
              >
                Description of the Recipe
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={recipeData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="cookingTime"
                className="block text-lg font-semibold mb-2"
              >
                Cooking Time
              </label>
              <select
                id="cookingTime"
                name="cookingTime"
                value={recipeData.cookingTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">1 hour</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="servings"
                className="block text-lg font-semibold mb-2"
              >
                Serving Size
              </label>
              <select
                id="servings"
                name="servings"
                value={recipeData.servings}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="2">2 persons</option>
                <option value="4">4 persons</option>
                <option value="6">6 persons</option>
                <option value="8">8 persons</option>
                <option value="10">10 persons</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="ingredients"
                className="block text-lg font-semibold mb-2"
              >
                Ingredients
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={recipeData.ingredients}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="instructions"
                className="block text-lg font-semibold mb-2"
              >
                Instructions
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={recipeData.instructions}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="salePrice"
                className="block text-lg font-semibold mb-2"
              >
                Sale Price €
              </label>
              <input
                type="text"
                id="salePrice"
                name="salePrice"
                value={recipeData.salePrice}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleSaveClick}
                className="text-lg font-semibold text-white bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Save
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <div>
              <label
                htmlFor="heroImage"
                className="block text-lg font-semibold mb-2"
              >
                Upload Hero Image
              </label>
              <input
                type="file"
                id="heroImage"
                name="heroImage"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              {recipeData.heroImage && (
                <img
                  src={URL.createObjectURL(recipeData.heroImage)}
                  alt="Hero"
                  className="mt-4 w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditRecipePage;
