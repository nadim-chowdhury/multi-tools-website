import React, { useState } from "react";

export default function YouTubeTitleGenerator() {
  const [keywords, setKeywords] = useState("");
  const [generatedTitle, setGeneratedTitle] = useState("");

  const generateTitle = () => {
    if (!keywords.trim()) {
      alert("Please enter some keywords");
      return;
    }
    const titleTemplates = [
      `How to ${keywords} - Ultimate Guide`,
      `Top 10 Tips for ${keywords}`,
      `Why ${keywords} is Important and How to Master It`,
      `The Secret to ${keywords} Revealed!`,
      `${keywords} Explained: Everything You Need to Know`,
    ];
    const randomTitle =
      titleTemplates[Math.floor(Math.random() * titleTemplates.length)];
    setGeneratedTitle(randomTitle);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">YouTube Title Generator</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter keywords..."
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateTitle}
        >
          Generate Title
        </button>
        {generatedTitle && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            <p>
              <strong>Generated Title:</strong> {generatedTitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
