import React, { useState } from "react";

export default function TextCaseConverter() {
  const [text, setText] = useState("");

  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());
  const toTitleCase = () => {
    setText(
      text.replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Text Case Converter</h2>
        <textarea
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
        />
        <div className="flex space-x-2">
          <button
            className="w-1/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toUpperCase}
          >
            Uppercase
          </button>
          <button
            className="w-1/3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={toLowerCase}
          >
            Lowercase
          </button>
          <button
            className="w-1/3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={toTitleCase}
          >
            Title Case
          </button>
        </div>
      </div>
    </div>
  );
}
