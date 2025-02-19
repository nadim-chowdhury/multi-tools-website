import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function DataDeduplication() {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");

  const handleDeduplicate = () => {
    const lines = inputData.split("\n").map((line) => line.trim());
    const uniqueLines = [...new Set(lines)];
    setOutputData(uniqueLines.join("\n"));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Data Deduplication</h2>
      <Textarea
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        rows="6"
        placeholder="Enter data here..."
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleDeduplicate}
      >
        Remove Duplicates
      </Button>
      <h3 className="text-lg font-semibold mt-4">Deduplicated Data:</h3>
      <Textarea
        className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded"
        rows="6"
        readOnly
        value={outputData}
      />
    </div>
  );
}
