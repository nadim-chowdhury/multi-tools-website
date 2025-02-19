import React, { useState } from "react";

export default function ResistorCalculator() {
  const [resistors, setResistors] = useState("");
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState("series");

  const calculateResistance = () => {
    const values = resistors.split(",").map(Number);
    let totalResistance = 0;

    if (mode === "series") {
      totalResistance = values.reduce((acc, r) => acc + r, 0);
    } else {
      totalResistance = 1 / values.reduce((acc, r) => acc + 1 / r, 0);
    }
    setResult(totalResistance.toFixed(2));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Resistor Calculator</h2>
      <input
        type="text"
        placeholder="Enter resistances (e.g., 10,20,30)"
        value={resistors}
        onChange={(e) => setResistors(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <select
        onChange={(e) => setMode(e.target.value)}
        className="border p-2 w-full rounded mt-2"
      >
        <option value="series">Series</option>
        <option value="parallel">Parallel</option>
      </select>
      <button
        onClick={calculateResistance}
        className="mt-2 p-2 bg-orange-500 text-white rounded w-full"
      >
        Calculate
      </button>
      {result && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">Total Resistance:</h3>
          <p>{result} Ω</p>
        </div>
      )}
    </div>
  );
}
