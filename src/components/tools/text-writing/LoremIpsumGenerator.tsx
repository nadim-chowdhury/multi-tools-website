import React, { useState } from "react";

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState("");

  const generateLoremIpsum = () => {
    const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    setGeneratedText(Array(paragraphs).fill(loremIpsum).join("\n\n"));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Lorem Ipsum Generator</h2>
        <input
          type="number"
          min="1"
          max="10"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Number of paragraphs"
          value={paragraphs}
          onChange={(e) => setParagraphs(Number(e.target.value))}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateLoremIpsum}
        >
          Generate Text
        </button>
        {generatedText && (
          <pre className="mt-4 p-3 bg-gray-700 rounded text-sm text-left overflow-auto max-h-60">
            {generatedText}
          </pre>
        )}
      </div>
    </div>
  );
}
