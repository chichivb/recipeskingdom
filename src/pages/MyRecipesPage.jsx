import React, { useEffect, useState } from "react";
import { useRecipe } from "../contexts/recipe-context";
import { useAuth } from "../contexts/auth-context";
import { useNavigate } from "react-router-dom";

const MyRecipesPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    userId: "",
  });

  const [userRecipes, setUserRecipes] = useState([]);
  const { getLoggedInUser } = useAuth();
  const { getRecipesByUserId, updateRecipe, deleteRecipe } = useRecipe();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserAndRecipes = async () => {
      const loggedInUser = await getLoggedInUser();

      if (loggedInUser) {
        setUser(loggedInUser);
        const recipes = await getRecipesByUserId(loggedInUser.userId);
        setUserRecipes(recipes);
      }
    };

    fetchUserAndRecipes();
  }, [getLoggedInUser, getRecipesByUserId]);

  const handlePublish = async (recipeId) => {
    await updateRecipe(recipeId, { published: true });
    const recipes = await getRecipesByUserId(user.userId);
    setUserRecipes(recipes);
  };
  const handleUnpublish = async (recipeId) => {
    await updateRecipe(recipeId, { published: false });
    const recipes = await getRecipesByUserId(user.userId);
    setUserRecipes(recipes);
  };

  const handleRemoveRecipe = async (recipeId) => {
    await deleteRecipe(recipeId);
    const recipes = await getRecipesByUserId(user.userId);
    setUserRecipes(recipes);
  };

  // Example of displaying the recipes
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">My Recipes</h1>
      <ul>
        {userRecipes.map((recipe) => (
          <li
            key={recipe.id}
            className="flex justify-between items-center border-b border-gray-200 py-4"
          >
            <span>{recipe.title}</span>
            <div>
              {recipe.published ? (
                <span className="bg-green-500 text-white font-bold py-1 px-2 rounded mr-2">
                  Published
                </span>
              ) : (
                <span className="bg-red-500 text-white font-bold py-1 px-2 rounded mr-2">
                  Draft
                </span>
              )}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => navigate(`/admin/edit-recipe/${recipe.id}`)}
              >
                Edit
              </button>
              {recipe.published ? (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleUnpublish(recipe.id)}
                >
                  Unpublish
                </button>
              ) : (
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handlePublish(recipe.id)}
                >
                  Publish
                </button>
              )}
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleRemoveRecipe(recipe.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyRecipesPage;
