import React, { useState } from "react";

export default function TikTokUsernameChecker() {
  const [username, setUsername] = useState("");
  const [availability, setAvailability] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkUsername = async () => {
    if (!username.trim()) {
      alert("Please enter a TikTok username");
      return;
    }
    setLoading(true);
    setAvailability(null);

    try {
      const response = await fetch(
        `https://api.example.com/tiktok/check-username?username=${encodeURIComponent(
          username
        )}`
      );
      const data = await response.json();
      setAvailability(data.available ? "Available" : "Taken");
    } catch (error) {
      console.error("Error checking username:", error);
      setAvailability("Error checking availability");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">TikTok Username Checker</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter TikTok username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={checkUsername}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Availability"}
        </button>
        {availability && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            <p>{availability}</p>
          </div>
        )}
      </div>
    </div>
  );
}
