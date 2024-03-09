import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ModalProvider } from "./contexts/modal-context";
import { AuthProvider } from "./contexts/auth-context";

import Modal from "./Modal";

const Layout = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <Navbar />
        <Outlet />
        <Modal />
        <Footer />
      </ModalProvider>
    </AuthProvider>
  );
};
export default Layout;
