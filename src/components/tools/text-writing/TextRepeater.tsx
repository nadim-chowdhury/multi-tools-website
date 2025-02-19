import React, { useState } from "react";

export default function TextRepeater() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Text Repeater</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
        min="1"
        className="w-full p-2 border rounded mb-4"
      />
      <div className="p-2 bg-white rounded border">
        {[...Array(count)].map((_, i) => (
          <p key={i} className="text-gray-700">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
