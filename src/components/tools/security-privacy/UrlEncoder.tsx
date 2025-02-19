import React, { useState } from "react";

export default function UrlEncoder() {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");

  const encodeUrl = () => {
    setEncoded(encodeURIComponent(input));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">URL Encoder</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter text to encode..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={encodeUrl}
        >
          Encode URL
        </button>
        {encoded && (
          <div className="mt-4 p-3 bg-gray-700 rounded break-all text-sm">
            <strong>Encoded URL:</strong> {encoded}
          </div>
        )}
      </div>
    </div>
  );
}
