import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Markdown Editor</h2>
        <textarea
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter Markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows={6}
        />
        <div className="mt-4 p-3 bg-gray-700 rounded text-sm text-left overflow-auto max-h-60">
          <h3 className="text-lg font-semibold mb-2">Preview</h3>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
