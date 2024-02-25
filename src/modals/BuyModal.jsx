import React, { useState } from "react";

const BuyModal = ({ name }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white w-96 p-8 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Buy Recipe {name}</h2>
      </div>
      <img
        src="https://via.placeholder.com/150"
        alt="Recipe Image"
        className="mt-4 mb-6 rounded-md"
      />
      <p className="text-lg font-bold text-gray-800 mb-2">$1.50</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="text"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          placeholder="Expiration Date"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          placeholder="CVV"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name on Card"
          className="w-full border rounded-md px-3 py-2 mb-6"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Buy
        </button>
      </form>
    </div>
  );
};

export default BuyModal;
