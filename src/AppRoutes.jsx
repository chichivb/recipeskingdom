import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipesPage";
import PadThai from "./pages/PadThai";
import AdminLayout from "./AdminLayout";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import AddRecipePage from "./pages/AddRecipePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/pad-thai" element={<PadThai />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminSettingsPage />} />
          <Route path="/admin/add-recipe" element={<AddRecipePage />} />
          <Route index element={<AddRecipePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
