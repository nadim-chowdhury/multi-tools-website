import React, { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Word Counter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="w-full p-2 border rounded mb-2"
        rows="4"
      />
      <p className="text-gray-700">Word Count: {wordCount}</p>
    </div>
  );
}
