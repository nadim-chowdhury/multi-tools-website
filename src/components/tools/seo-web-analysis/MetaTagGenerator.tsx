import React, { useState } from "react";

export default function MetaTagGenerator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [generatedMeta, setGeneratedMeta] = useState("");

  const generateMetaTags = () => {
    if (!title || !description || !keywords) {
      alert("Please fill in all fields");
      return;
    }
    const metaTags = `
      <title>${title}</title>
      <meta name="description" content="${description}" />
      <meta name="keywords" content="${keywords}" />
    `;
    setGeneratedMeta(metaTags.trim());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Meta Tag Generator</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter Keywords (comma separated)..."
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateMetaTags}
        >
          Generate Meta Tags
        </button>
        {generatedMeta && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm text-left">
            <pre className="whitespace-pre-wrap break-all">{generatedMeta}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
