import React, { useState } from "react";

export default function LanguageVocabularyBuilder() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [vocabulary, setVocabulary] = useState([]);

  const addWord = () => {
    if (word && translation) {
      setVocabulary([...vocabulary, { word, translation }]);
      setWord("");
      setTranslation("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Language Vocabulary Builder</h2>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter Word"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
        placeholder="Enter Translation"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={addWord}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Add Word
      </button>
      <div className="mt-4">
        {vocabulary.map((entry, index) => (
          <div key={index} className="p-2 bg-white border rounded mb-2">
            <p className="font-bold">{entry.word}</p>
            <p>{entry.translation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
