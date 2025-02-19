import React, { useState } from "react";

export default function ReadingTimeEstimator() {
  const [text, setText] = useState("");
  const [readingTime, setReadingTime] = useState(null);

  const calculateReadingTime = () => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = text.split(/\s+/).filter((word) => word).length;
    const estimatedTime = Math.ceil(wordCount / wordsPerMinute);
    setReadingTime(estimatedTime);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Reading Time Estimator</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to estimate reading time"
        className="w-full p-2 border rounded mb-2"
        rows="4"
      />
      <button
        onClick={calculateReadingTime}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Estimate Reading Time
      </button>
      {readingTime !== null && (
        <p className="mt-4 text-gray-700">
          Estimated Reading Time: {readingTime} minute(s)
        </p>
      )}
    </div>
  );
}
