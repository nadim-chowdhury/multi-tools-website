import React, { useState } from "react";

export default function TrainSeatChecker() {
  const [trainNumber, setTrainNumber] = useState("");
  const [seatAvailability, setSeatAvailability] = useState(null);

  const checkAvailability = () => {
    // Simulated seat availability check
    const mockAvailability = Math.random() > 0.5 ? "Available" : "Full";
    setSeatAvailability(mockAvailability);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Train Seat Checker</h2>
      <input
        type="text"
        value={trainNumber}
        onChange={(e) => setTrainNumber(e.target.value)}
        placeholder="Enter Train Number"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={checkAvailability}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Check Availability
      </button>
      {seatAvailability !== null && (
        <p className="text-gray-700">Seat Status: {seatAvailability}</p>
      )}
    </div>
  );
}
