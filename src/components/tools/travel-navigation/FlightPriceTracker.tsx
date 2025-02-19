import React, { useState } from "react";

export default function FlightPriceTracker() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState(null);

  const handleTrackPrice = () => {
    // Simulated price tracking logic
    const mockPrice = Math.floor(Math.random() * 500) + 100; // Random price between 100-600
    setPrice(mockPrice);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Flight Price Tracker</h2>
      <input
        type="text"
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
        placeholder="Departure City"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination City"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleTrackPrice}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Track Price
      </button>
      {price !== null && (
        <p className="text-gray-700">Estimated Price: ${price}</p>
      )}
    </div>
  );
}
