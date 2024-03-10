import { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { convertBase64 } from "../helpers";

const AdminSettingsPage = () => {
  const { loggedInUser, update } = useAuth();

  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    about: "",
    avatar: "",
  });

  useEffect(() => {
    if (loggedInUser) {
      setUser({
        id: loggedInUser.id,
        username: loggedInUser.username,
        email: loggedInUser.email,
        about: loggedInUser.about,
        avatar: loggedInUser.avatar,
      });
    }
  }, [loggedInUser]);

  const handleNameChange = (e) => {
    setUser({ ...user, username: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleAboutChange = (e) => {
    setUser({ ...user, about: e.target.value });
  };

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setUser({ ...user, avatar: base64 });
  };

  const handleSaveAccount = () => {
    update(user);
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
              value={user.about}
              onChange={handleAboutChange}
              className="w-full border rounded-md px-3 py-2"
              rows={5}
            />
          </div>
          <button
            onClick={handleSaveAccount}
            className="bg-rk-alto-950 text-rk-masala-50 px-4 py-3 rounded-md text-sm font-medium focus:outline-none focus:bg-green-600 mr-2"
          >
            Save
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
          {user.avatar && (
            <img src={user.avatar} alt="Hero" className="mt-4 w-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
