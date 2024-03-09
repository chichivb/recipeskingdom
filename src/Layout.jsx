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

/*     <AuthProvider>  we hold the state of the userm for sign up , log in and update 
For the <ModalProvider>  hold the state for the modal and modal has faction to open and close 
For the <Outlet /> render all the pages of the website 

*/
