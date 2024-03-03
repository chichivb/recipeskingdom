import React, { useState } from "react";

import StripeComponent from "../StripeComponent";

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
      <StripeComponent />
    </div>
  );
};

export default BuyModal;
