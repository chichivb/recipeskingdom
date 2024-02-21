import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipesPage";
import PadThai from "./pages/PadThai";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/pad-thai" element={<PadThai />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
