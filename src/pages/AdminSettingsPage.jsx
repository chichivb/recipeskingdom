import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/auth-context";

const AdminSettingsPage = () => {
  const { getLoggedInUser } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const loggedInUser = getLoggedInUser();

    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [getLoggedInUser]);

  // Event handlers to update user information
  const handleNameChange = (e) => {
    setUser({ ...user, username: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleAboutChange = (e) => {
    setUser({ ...user, about: e.target.value });
  };

  const handleProfilePictureChange = (e) => {
    // Logic to handle profile picture upload
  };

  const handleDeleteAccount = () => {
    // Logic to delete account
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={user.username}
              onChange={handleNameChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={handleEmailChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="about" className="block font-bold mb-2">
              About me
            </label>
            <textarea
              id="about"
              //value={user.about}
              onChange={handleAboutChange}
              className="w-full border rounded-md px-3 py-2"
              rows={5}
            />
          </div>
          <button
            onClick={handleDeleteAccount}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete Account
          </button>
        </div>
        <div>
          <div className="mb-4">
            <label htmlFor="profilePicture" className="block font-bold mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              onChange={handleProfilePictureChange}
            />
          </div>
          <div>{/* Display uploaded profile picture here */}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
