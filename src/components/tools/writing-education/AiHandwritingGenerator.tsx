import React, { useState } from "react";

export default function AiHandwritingGenerator() {
  const [text, setText] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);

  const generateHandwriting = () => {
    // Placeholder logic for AI handwriting generation
    setGeneratedImage(
      `https://dummyimage.com/300x100/000/fff&text=${encodeURIComponent(text)}`
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">AI Handwriting Generator</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert to handwriting"
        className="w-full p-2 border rounded mb-2"
        rows="3"
      />
      <button
        onClick={generateHandwriting}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Generate Handwriting
      </button>
      {generatedImage && (
        <img
          src={generatedImage}
          alt="AI Handwriting"
          className="mt-4 rounded"
        />
      )}
    </div>
  );
}
