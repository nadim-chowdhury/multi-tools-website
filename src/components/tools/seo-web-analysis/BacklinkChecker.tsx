import React, { useState } from "react";

export default function BacklinkChecker() {
  const [url, setUrl] = useState("");
  const [backlinks, setBacklinks] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkBacklinks = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }
    setLoading(true);
    setBacklinks(null);

    try {
      const response = await fetch(
        `https://api.example.com/backlinks?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      setBacklinks(data);
    } catch (error) {
      console.error("Error fetching backlinks:", error);
      setBacklinks({ error: "Failed to fetch backlinks" });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Backlink Checker</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={checkBacklinks}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Backlinks"}
        </button>
        {backlinks && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            {backlinks.error ? (
              <p className="text-red-400">{backlinks.error}</p>
            ) : (
              <ul>
                {backlinks.list.map((link, index) => (
                  <li key={index} className="break-all">
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
