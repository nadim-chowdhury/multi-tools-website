import React, { useState } from "react";

export default function OnlineNotepad() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Online Notepad</h2>
        <textarea
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white h-60"
          placeholder="Start typing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p className="text-sm text-gray-400">
          Your text is automatically saved locally.
        </p>
      </div>
    </div>
  );
}
