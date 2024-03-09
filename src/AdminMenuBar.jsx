import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiPlusSquare,
  FiSettings,
  FiLogOut,
} from "react-icons/fi"; // Import icons from react-icons

const AdminMenuBar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col justify-between">
      <div className="p-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin/dashboard"
                className="flex items-center space-x-2"
              >
                <FiHome className="text-xl" /> {/* Home icon */}
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/my-recipes"
                className="flex items-center space-x-2"
              >
                <FiBook className="text-xl" /> {/* Book icon */}
                My Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/admin/add-recipe"
                className="flex items-center space-x-2"
              >
                <FiPlusSquare className="text-xl" /> {/* Plus square icon */}
                Add Recipe
              </Link>
            </li>
            <li>
              <Link to="/admin" className="flex items-center space-x-2">
                <FiSettings className="text-xl" /> {/* Settings icon */}
                Settings
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center space-x-2">
                <FiLogOut className="text-xl" /> {/* Log out icon */}
                Log Out
              </Link>
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
