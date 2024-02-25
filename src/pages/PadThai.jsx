import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useModal } from "../contexts/modal-context";
import recipe1 from "../assets/padthai.jpeg";
import BuyModal from "../modals/BuyModal";

const Tab = ({ tab, activeTab, setActiveTab }) => {
  const isActive = tab === activeTab;

  return (
    <button
      className={`text-lg font-semibold py-2 px-4 focus:outline-none ${
        isActive ? "border-b-2 border-rk-masala-500" : "text-gray-500"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  );
};

const TabContent = ({ children, activeTab }) => {
  return <div>{activeTab && children}</div>;
};

const PadThai = () => {
  const [activeTab, setActiveTab] = useState("Ingredients");

  const { openModal } = useModal();

  const handleLoginClick = () => {
    openModal(<BuyModal name="Pad thai" />);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h1 className="text-5xl lg:text-5xl font-bold text-gray-800 mb-4">
              Pad Thai with King Prawns
            </h1>
            <button className="text-xl text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rk-masala-500 focus:ring-opacity-50">
              30 minutes
            </button>
            <button className="text-xl text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rk-masala-500 focus:ring-opacity-50">
              2 servings
            </button>
            <div className="flex justify-left mt-4 mb-8 space-x-4">
              <Tab
                tab="Ingredients"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <Tab
                tab="Instructions"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>

            <TabContent activeTab={activeTab === "Ingredients"}>
              <ul className="text-2xl list-disc text-gray-600">
                <li>Rice noodles</li>
                <li>Bean sprouts</li>
                <li>Tofu</li>
                <li>Garlic</li>
                <li>Shrimp</li>
              </ul>
            </TabContent>

            <TabContent activeTab={activeTab === "Instructions"}>
              <ol className="text-2xl list-decimal text-gray-600">
                <li>Cook rice noodles according to package instructions</li>
                <li>Heat oil in a pan and cook shrimp until pink</li>
                <li>Add tofu, garlic, and bean sprouts; cook until tender</li>
                <li>Combine with cooked noodles and serve</li>
              </ol>
            </TabContent>
            <div className="flex justify-center mt-4 mb-8">
              <button
                className="text-xl font-semibold text-white bg-green-500 px-6 py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={handleLoginClick}
              >
                Buy recipe
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={recipe1} alt="Padthai" className="w-full object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PadThai;
