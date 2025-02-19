import React, { useState } from "react";

export default function CitationGenerator() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [citation, setCitation] = useState("");

  const generateCitation = () => {
    if (author && title && year) {
      setCitation(`${author} (${year}). ${title}.`);
    } else {
      setCitation("Please fill in all fields.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Citation Generator</h2>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter Author Name"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Book/Article Title"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Enter Year of Publication"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={generateCitation}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Generate Citation
      </button>
      {citation && <p className="mt-4 text-gray-700">{citation}</p>}
    </div>
  );
}
