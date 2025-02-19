import React, { useState } from "react";

export default function JsonFormatter() {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [error, setError] = useState(null);

  const formatJson = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
      setError(null);
    } catch (err) {
      setFormattedJson("");
      setError("Invalid JSON format. Please check your input.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">JSON Formatter</h2>
        <textarea
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter JSON here..."
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          rows={6}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={formatJson}
        >
          Format JSON
        </button>
        {error && <p className="mt-4 text-red-400">{error}</p>}
        {formattedJson && (
          <pre className="mt-4 p-3 bg-gray-700 rounded text-sm text-left overflow-auto max-h-60">
            {formattedJson}
          </pre>
        )}
      </div>
    </div>
  );
}
