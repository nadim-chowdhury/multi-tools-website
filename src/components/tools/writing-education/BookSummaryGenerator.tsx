import React, { useState } from "react";

export default function BookSummaryGenerator() {
  const [bookTitle, setBookTitle] = useState("");
  const [summary, setSummary] = useState("");

  const generateSummary = () => {
    // Placeholder logic for book summary generation
    setSummary(
      `Summary of "${bookTitle}": This is a fascinating book covering various themes and ideas, providing deep insights and engaging storytelling.`
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Book Summary Generator</h2>
      <input
        type="text"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        placeholder="Enter Book Title"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={generateSummary}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Generate Summary
      </button>
      {summary && <p className="mt-4 text-gray-700">{summary}</p>}
    </div>
  );
}
