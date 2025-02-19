import React, { useState } from "react";

export default function KeywordResearchTool() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchKeywordData = async () => {
    if (!keyword) {
      alert("Please enter a keyword");
      return;
    }
    setLoading(true);
    setResults(null);

    try {
      const response = await fetch(
        `https://api.example.com/keyword-research?keyword=${encodeURIComponent(
          keyword
        )}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching keyword data:", error);
      setResults({ error: "Failed to fetch keyword data" });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Keyword Research Tool</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchKeywordData}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Search Keywords"}
        </button>
        {results && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            {results.error ? (
              <p className="text-red-400">{results.error}</p>
            ) : (
              <ul>
                {results.keywords.map((item, index) => (
                  <li key={index} className="break-all">
                    {item}
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
