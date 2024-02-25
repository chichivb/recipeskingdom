import { Outlet } from "react-router-dom";
import AdminMenuBar from "./AdminMenuBar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminMenuBar />
      <Outlet />
    </div>
  );
};
export default AdminLayout;
