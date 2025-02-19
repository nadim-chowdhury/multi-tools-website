import React, { useState } from "react";

export default function FlashcardCreator() {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = () => {
    if (term && definition) {
      setFlashcards([...flashcards, { term, definition }]);
      setTerm("");
      setDefinition("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Flashcard Creator</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter Term"
        className="w-full p-2 border rounded mb-2"
      />
      <textarea
        value={definition}
        onChange={(e) => setDefinition(e.target.value)}
        placeholder="Enter Definition"
        className="w-full p-2 border rounded mb-2"
        rows="2"
      />
      <button
        onClick={addFlashcard}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Add Flashcard
      </button>
      <div className="mt-4">
        {flashcards.map((card, index) => (
          <div key={index} className="p-2 bg-white border rounded mb-2">
            <p className="font-bold">{card.term}</p>
            <p>{card.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
