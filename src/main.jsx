import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipesPage";
import PadThai from "./pages/PadThai";
import AdminLayout from "./AdminLayout";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import AddRecipePage from "./pages/AddRecipePage";
import MyRecipesPage from "./pages/MyRecipesPage";
import EditRecipePage from "./pages/EditRecipePage";
import Completion from "./Completion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<PadThai />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminSettingsPage />} />
            <Route path="/admin/add-recipe" element={<AddRecipePage />} />
            <Route path="/admin/my-recipes" element={<MyRecipesPage />} />
            <Route path="/admin/edit-recipe/:id" element={<EditRecipePage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

//React Enterpoint -
//From here there is 'HashRounter' container knows how to read URL from browser
//it reads from brower URL for exsample 'recipespage' if mactch on the with one on the AppRounters then it starts to render the page
//without 'HashRounter' it wont work
