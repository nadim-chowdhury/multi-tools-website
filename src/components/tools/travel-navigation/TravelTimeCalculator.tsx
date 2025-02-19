import React, { useState } from "react";

export default function TravelTimeCalculator() {
  const [distance, setDistance] = useState("");
  const [speed, setSpeed] = useState("");
  const [travelTime, setTravelTime] = useState(null);

  const calculateTime = () => {
    if (parseFloat(speed) > 0) {
      const time = parseFloat(distance) / parseFloat(speed);
      setTravelTime(isNaN(time) ? "Invalid input" : `${time.toFixed(2)} hours`);
    } else {
      setTravelTime("Invalid speed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Travel Time Calculator</h2>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Enter Distance (miles)"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="number"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        placeholder="Enter Speed (mph)"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={calculateTime}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Calculate Time
      </button>
      {travelTime !== null && (
        <p className="text-gray-700">Estimated Travel Time: {travelTime}</p>
      )}
    </div>
  );
}
