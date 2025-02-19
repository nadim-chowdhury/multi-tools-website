import React, { useState } from "react";

export default function ItineraryGenerator() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(1);
  const [itinerary, setItinerary] = useState([]);

  const handleGenerate = () => {
    const activities = [
      "Visit a historical site",
      "Try a local restaurant",
      "Explore a museum",
      "Go for a nature walk",
      "Attend a cultural event",
    ];

    const generatedItinerary = Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      activity: activities[i % activities.length],
    }));
    setItinerary(generatedItinerary);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Itinerary Generator</h2>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter Destination"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="number"
        value={days}
        onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
        min="1"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleGenerate}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Generate Itinerary
      </button>
      <ul className="list-disc pl-5">
        {itinerary.map(({ day, activity }) => (
          <li key={day} className="text-gray-700">
            Day {day}: {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
