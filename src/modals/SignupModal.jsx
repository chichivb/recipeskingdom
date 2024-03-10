import { useState } from "react";
import { useModal } from "../contexts/modal-context";
import { useAuth } from "../contexts/auth-context";

const SignupModal = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { closeModal } = useModal();

  const { register } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement signup logic
    console.log("Signing up:", { fullName, email, password });
    const response = register(fullName, email, password);
    if (response) {
      // modal close
      closeModal();
    }
    setError(true);
  };

  return (
    <div className="px-8 py-4">
      <h1 className="text-2xl mb-4">Create Account</h1>
      {error && <p className="text-red-500 mb-4">Email is taken</p>}

      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-bold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none "
          />
        </div>
        <button
          type="submit"
          className=" bg-rk-alto-950 text-white py-2 px-4 rounded-md focus:outline-none"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupModal;
