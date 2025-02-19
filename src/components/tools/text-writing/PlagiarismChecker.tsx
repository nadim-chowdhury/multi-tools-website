import React, { useState } from "react";

export default function PlagiarismChecker() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const checkPlagiarism = async () => {
    if (!text.trim()) {
      alert("Please enter some text to check");
      return;
    }
    setLoading(true);
    setResult("");

    try {
      // Replace with actual plagiarism-check API endpoint
      const response = await fetch("https://api.example.com/plagiarism-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setResult(data.result || "No plagiarism detected.");
    } catch (error) {
      console.error("Error checking plagiarism:", error);
      setResult("Error checking plagiarism. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Plagiarism Checker</h2>
        <textarea
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter text to check..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={checkPlagiarism}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Plagiarism"}
        </button>
        {result && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            <p>
              <strong>Result:</strong> {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
