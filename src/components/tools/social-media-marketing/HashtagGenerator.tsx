import React, { useState } from "react";

export default function HashtagGenerator() {
  const [keywords, setKeywords] = useState("");
  const [hashtags, setHashtags] = useState([]);

  const generateHashtags = () => {
    if (!keywords.trim()) {
      alert("Please enter some keywords");
      return;
    }
    const words = keywords
      .split(",")
      .map((word) => word.trim().replace(/\s+/g, ""));
    const generated = words.map(
      (word) => `#${word.replace(/[^a-zA-Z0-9]/g, "")}`
    );
    setHashtags(generated);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Hashtag Generator</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter keywords (comma separated)..."
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateHashtags}
        >
          Generate Hashtags
        </button>
        {hashtags.length > 0 && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm text-left">
            <p className="break-all">{hashtags.join(" ")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
