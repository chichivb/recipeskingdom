import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipesPage";
import PadThai from "./pages/PadThai";
import AdminLayout from "./AdminLayout";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import AddRecipePage from "./pages/AddRecipePage";
import DashboardPage from "./pages/DashboardPage";
import MyRecipesPage from "./pages/MyRecipesPage";
import EditRecipePage from "./pages/EditRecipePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<PadThai />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminSettingsPage />} />
          <Route path="/admin/add-recipe" element={<AddRecipePage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/my-recipes" element={<MyRecipesPage />} />
          <Route path="/admin/edit-recipe/:id" element={<EditRecipePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
