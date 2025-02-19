import React, { useState } from "react";

export default function BrokenLinkChecker() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkBrokenLinks = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }
    setLoading(true);
    setLinks(null);

    try {
      const response = await fetch(
        `https://api.example.com/broken-links?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      setLinks(data);
    } catch (error) {
      console.error("Error fetching broken links:", error);
      setLinks({ error: "Failed to fetch broken links" });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Broken Link Checker</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={checkBrokenLinks}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Broken Links"}
        </button>
        {links && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            {links.error ? (
              <p className="text-red-400">{links.error}</p>
            ) : (
              <ul>
                {links.list.map((link, index) => (
                  <li key={index} className="break-all text-red-400">
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
