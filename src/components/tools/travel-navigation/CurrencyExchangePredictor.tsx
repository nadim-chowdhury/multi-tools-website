import React, { useState } from "react";

export default function CurrencyExchangePredictor() {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [predictedRate, setPredictedRate] = useState(null);

  const handlePredict = () => {
    // Simulated prediction logic
    const mockRates = { USD: 1.1, EUR: 0.9, GBP: 0.8 };
    setPredictedRate(mockRates[currency] * amount);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Currency Exchange Predictor</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value) || 1)}
        className="w-full p-2 border rounded mb-2"
        min="1"
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <button
        onClick={handlePredict}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Predict Exchange Rate
      </button>
      {predictedRate !== null && (
        <p className="text-gray-700">
          Predicted Exchange: {predictedRate.toFixed(2)}
        </p>
      )}
    </div>
  );
}
