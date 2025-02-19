import React, { useState } from "react";

export default function PageSpeedAnalyzer() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSpeed = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `https://api.example.com/pagespeed?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error analyzing page speed:", error);
      setResult({ error: "Failed to analyze page speed" });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Page Speed Analyzer</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={analyzeSpeed}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Speed"}
        </button>
        {result && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            {result.error ? (
              <p className="text-red-400">{result.error}</p>
            ) : (
              <p>
                <strong>Page Speed Score:</strong> {result.score}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
