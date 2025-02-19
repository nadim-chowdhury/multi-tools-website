import React, { useState } from "react";

export default function TollCostCalculator() {
  const [distance, setDistance] = useState("");
  const [rate, setRate] = useState("");
  const [totalCost, setTotalCost] = useState(null);

  const calculateCost = () => {
    const cost = parseFloat(distance) * parseFloat(rate);
    setTotalCost(isNaN(cost) ? "Invalid input" : `$${cost.toFixed(2)}`);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Toll Cost Calculator</h2>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Enter distance (miles)"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Enter toll rate ($ per mile)"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={calculateCost}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Calculate Cost
      </button>
      {totalCost !== null && (
        <p className="text-gray-700">Total Toll Cost: {totalCost}</p>
      )}
    </div>
  );
}
