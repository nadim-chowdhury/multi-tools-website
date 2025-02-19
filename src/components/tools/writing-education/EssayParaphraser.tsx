import React, { useState } from "react";

export default function EssayParaphraser() {
  const [text, setText] = useState("");
  const [paraphrasedText, setParaphrasedText] = useState("");

  const paraphraseText = () => {
    // Simple placeholder logic for paraphrasing
    setParaphrasedText(text.split(" ").reverse().join(" "));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Essay Paraphraser</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to paraphrase"
        className="w-full p-2 border rounded mb-2"
        rows="4"
      />
      <button
        onClick={paraphraseText}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Paraphrase
      </button>
      {paraphrasedText && (
        <p className="mt-4 text-gray-700">{paraphrasedText}</p>
      )}
    </div>
  );
}
