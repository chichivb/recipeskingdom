// recipe-context.js
import { v4 as uuidv4 } from "uuid";

import React, { createContext, useContext } from "react";
import { getItem, setItem } from "../storage";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const addRecipe = (userId, recipe, published) => {
    console.log(" userId -----------------------------> ", userId);
    console.log(" recipe -----------------------------> ", recipe);
    console.log(" published -----------------------------> ", published);

    const recipes = getItem("recipes") || [];
    const newRecipe = { id: uuidv4(), userId, ...recipe, published };
    recipes.push(newRecipe);
    setItem("recipes", recipes);
  };

  const getAllPublishedRecipes = () => {
    const recipes = getItem("recipes") || [];
    return recipes.filter((recipe) => recipe.published === true);
  };

  const getRecipesByUserId = (userId) => {
    console.log("userId > ", userId);
    const recipes = getItem("recipes") || [];
    return recipes.filter((recipe) => recipe.userId === userId);
  };

  const getRecipeById = (recipeId) => {
    const recipes = getItem("recipes") || {};
    return recipes.filter((recipe) => recipe.id === recipeId)[0];
  };

  const updateRecipe = (recipeId, updatedRecipe) => {
    const recipes = getItem("recipes") || [];
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === recipeId) {
        return { ...recipe, ...updatedRecipe };
      }
      return recipe;
    });
    setItem("recipes", updatedRecipes);
  };

  const deleteRecipe = (recipeId) => {
    const recipes = getItem("recipes") || [];
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setItem("recipes", updatedRecipes);
  };

  return (
    <RecipeContext.Provider
      value={{
        addRecipe,
        getAllPublishedRecipes,
        getRecipeById,
        getRecipesByUserId,
        updateRecipe,
        deleteRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
