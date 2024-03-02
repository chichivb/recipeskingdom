import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ModalProvider } from "./contexts/modal-context";
import { AuthProvider } from "./contexts/auth-context";
import { RecipeProvider } from "./contexts/recipe-context";

import Modal from "./Modal";

const Layout = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <RecipeProvider>
          <Navbar />
          <Outlet />
          <Modal />
          <Footer />
        </RecipeProvider>
      </ModalProvider>
    </AuthProvider>
  );
};
export default Layout;
