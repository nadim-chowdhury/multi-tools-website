import React, { useState } from "react";
import axios from "axios";

export default function ChemicalBalancer() {
  const [equation, setEquation] = useState("");
  const [balancedEquation, setBalancedEquation] = useState(null);

  const balanceEquation = async () => {
    try {
      const response = await axios.post(
        "https://chemistry-api.example.com/balance",
        { equation }
      );
      setBalancedEquation(response.data.balancedEquation);
    } catch (error) {
      alert("Error balancing equation");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Chemical Equation Balancer</h2>
      <input
        type="text"
        placeholder="Enter equation (e.g., H2 + O2 = H2O)"
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        onClick={balanceEquation}
        className="mt-2 p-2 bg-green-500 text-white rounded w-full"
      >
        Balance Equation
      </button>
      {balancedEquation && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">Balanced Equation:</h3>
          <p>{balancedEquation}</p>
        </div>
      )}
    </div>
  );
}
