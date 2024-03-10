import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import AllRecipesPage from "./pages/AllRecipePage";
import RecipePage from "./pages/RecipePage";
import AdminLayout from "./AdminLayout";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import AddRecipePage from "./pages/AddRecipePage";
import MyRecipesPage from "./pages/MyRecipesPage";
import EditRecipePage from "./pages/EditRecipePage";
import Completion from "./Completion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/recipes" element={<AllRecipesPage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminSettingsPage />} />
            <Route path="/admin/add-recipe" element={<AddRecipePage />} />
            <Route path="/admin/my-recipes" element={<MyRecipesPage />} />
            <Route path="/admin/edit-recipe/:id" element={<EditRecipePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//React Enterpoint -
//From here there is 'BrowserRouter' container knows how to read URL from browser
//it reads from brower URL for exsample 'recipespage' is path which is mactched to one of the components created on main.jsx
