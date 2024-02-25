import React from "react";
import { Link } from "react-router-dom";

const AdminMenuBar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col justify-between">
      <div className="p-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/admin">Settings</Link>
            </li>
            <li>
              <Link to="/admin/add-recipe">Add Recipe</Link>
            </li>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/logout">Log Out</Link>
            </li>
          </ul>
        </div>
        {/* Add user authentication or profile options here */}
      </div>
      <div className="p-4">
        {/* Add user authentication or profile options here */}
      </div>
    </div>
  );
};

export default AdminMenuBar;
