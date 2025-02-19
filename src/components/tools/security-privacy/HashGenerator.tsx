import React, { useState } from "react";

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");

  const generateHash = async () => {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    setHash(hashHex);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          SHA-256 Hash Generator
        </h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateHash}
        >
          Generate Hash
        </button>
        {hash && (
          <div className="mt-4 p-3 bg-gray-700 rounded break-all text-sm">
            <strong>Hash:</strong> {hash}
          </div>
        )}
      </div>
    </div>
  );
}
