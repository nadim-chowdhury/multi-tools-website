import React, { useState } from "react";

export default function UrlDecoder() {
  const [input, setInput] = useState("");
  const [decoded, setDecoded] = useState("");

  const decodeUrl = () => {
    try {
      setDecoded(decodeURIComponent(input));
    } catch (error) {
      setDecoded("Invalid URL encoding");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">URL Decoder</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter encoded URL..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={decodeUrl}
        >
          Decode URL
        </button>
        {decoded && (
          <div className="mt-4 p-3 bg-gray-700 rounded break-all text-sm">
            <strong>Decoded URL:</strong> {decoded}
          </div>
        )}
      </div>
    </div>
  );
}
