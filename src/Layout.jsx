import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ModalProvider } from "./contexts/modal-context";
import Modal from "./Modal";

const Layout = () => {
  return (
    <ModalProvider>
      <Navbar />
      <Outlet />
      <Modal />
      <Footer />
    </ModalProvider>
  );
};
export default Layout;
