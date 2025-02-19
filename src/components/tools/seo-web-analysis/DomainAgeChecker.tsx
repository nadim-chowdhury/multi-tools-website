import React, { useState } from "react";

export default function DomainAgeChecker() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkDomainAge = async () => {
    if (!domain) {
      alert("Please enter a domain");
      return;
    }
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `https://api.example.com/domain-age?domain=${encodeURIComponent(
          domain
        )}`
      );
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching domain age:", error);
      setResult({ error: "Failed to fetch domain age" });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Domain Age Checker</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter domain name..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={checkDomainAge}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Domain Age"}
        </button>
        {result && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            {result.error ? (
              <p className="text-red-400">{result.error}</p>
            ) : (
              <p>
                <strong>Domain Age:</strong> {result.age} years
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
