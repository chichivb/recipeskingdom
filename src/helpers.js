import { v4 as uuidv4 } from "uuid";

export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function receiveFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);

  return storedValue && JSON.parse(storedValue);
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
export const addRecipe = (userId, recipe, published) => {
  const recipes = receiveFromLocalStorage("recipes") || [];
  const newRecipe = { id: uuidv4(), userId, ...recipe, published };
  recipes.push(newRecipe);
  saveToLocalStorage("recipes", recipes);
};

export const getAllPublishedRecipes = () => {
  const recipes = receiveFromLocalStorage("recipes") || [];
  return recipes.filter((recipe) => recipe.published === true);
};

export const getRecipesByUserId = (userId) => {
  console.log("userId > ", userId);
  const recipes = receiveFromLocalStorage("recipes") || [];
  return recipes.filter((recipe) => recipe.userId === userId);
};

export const getRecipeById = (recipeId) => {
  const recipes = receiveFromLocalStorage("recipes") || {};
  return recipes.filter((recipe) => recipe.id === recipeId)[0];
};

export const updateRecipe = (recipeId, updatedRecipe) => {
  const recipes = receiveFromLocalStorage("recipes") || [];
  const updatedRecipes = recipes.map((recipe) => {
    if (recipe.id === recipeId) {
      return { ...recipe, ...updatedRecipe };
    }
    return recipe;
  });
  saveToLocalStorage("recipes", updatedRecipes);
};

export const deleteRecipe = (recipeId) => {
  const recipes = receiveFromLocalStorage("recipes") || [];
  const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
  saveToLocalStorage("recipes", updatedRecipes);
};

//to hide all the complexity from the component and that is why helpers was created
// it creates to go to storage and get data with 9 factions
