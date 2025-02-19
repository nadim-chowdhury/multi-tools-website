import React, { useState } from "react";

export default function SatWordListGenerator() {
  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const addWord = () => {
    if (word && definition) {
      setWordList([...wordList, { word, definition }]);
      setWord("");
      setDefinition("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">SAT Word List Generator</h2>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter SAT Word"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        value={definition}
        onChange={(e) => setDefinition(e.target.value)}
        placeholder="Enter Definition"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={addWord}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Add Word
      </button>
      <div className="mt-4">
        {wordList.map((entry, index) => (
          <div key={index} className="p-2 bg-white border rounded mb-2">
            <p className="font-bold">{entry.word}</p>
            <p>{entry.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
