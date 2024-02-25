import React, { useState } from "react";

const DashboardPage = () => {
  // State variables
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPublishedRecipes, setTotalPublishedRecipes] = useState(0);
  const [totalDraftRecipes, setTotalDraftRecipes] = useState(0);
  const [totalRevenueEarned, setTotalRevenueEarned] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [selectedTransactions, setSelectedTransactions] = useState([]);

  // Function to handle date range change
  const handleDateRangeChange = (e) => {
    // Implement your logic to set start and end date
    // based on the selected date range
    // For example:
    const selectedRange = e.target.value;
    const today = new Date();
    let newStartDate = new Date();
    if (selectedRange === "7days") {
      newStartDate.setDate(today.getDate() - 7);
    } else if (selectedRange === "30days") {
      newStartDate.setDate(today.getDate() - 30);
    } else if (selectedRange === "90days") {
      newStartDate.setDate(today.getDate() - 90);
    }
    setStartDate(newStartDate.toISOString().slice(0, 10));
    setEndDate(today.toISOString().slice(0, 10));
  };

  // Function to handle payout checkbox change
  const handleCheckboxChange = (e, index) => {
    const isChecked = e.target.checked;
    const updatedTransactions = [...selectedTransactions];
    updatedTransactions[index] = isChecked;
    setSelectedTransactions(updatedTransactions);
  };

  // Function to handle payout
  const handlePayout = () => {
    // Implement your logic to process payouts for selected transactions
    console.log(
      "Payout initiated for selected transactions:",
      selectedTransactions
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Sales Dashboard</h1>
      <div className="mb-4">
        <label className="mr-2">Select Date Range:</label>
        <select
          className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleDateRangeChange}
        >
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="90days">Last 90 Days</option>
        </select>
      </div>
      <div className="mb-4">
        <p>Total Published Recipes: {totalPublishedRecipes}</p>
        <p>Total Draft Recipes: {totalDraftRecipes}</p>
        <p>Total Revenue Earned: €{totalRevenueEarned}</p>
      </div>
      <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Recipe Name</th>
            <th>Amount</th>
            <th>Select for Payout</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.recipeName}</td>
              <td>${transaction.amount}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedTransactions[index]}
                  onChange={(e) => handleCheckboxChange(e, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handlePayout}
        >
          Payout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
