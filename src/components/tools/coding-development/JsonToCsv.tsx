import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function JsonToCsv() {
  const [jsonInput, setJsonInput] = useState("");
  const [csvOutput, setCsvOutput] = useState("");

  const convertToCsv = () => {
    try {
      const jsonArray = JSON.parse(jsonInput);
      if (!Array.isArray(jsonArray)) throw new Error("Invalid JSON array");

      const headers = Object.keys(jsonArray[0]).join(",");
      const rows = jsonArray
        .map((obj) => Object.values(obj).join(","))
        .join("\n");
      setCsvOutput(`${headers}\n${rows}`);
    } catch (error) {
      setCsvOutput("Invalid JSON input");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">JSON to CSV Converter</h2>
      <Textarea
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        rows="6"
        placeholder="Enter JSON array here..."
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={convertToCsv}
      >
        Convert to CSV
      </Button>
      <h3 className="text-lg font-semibold mt-4">CSV Output:</h3>
      <Textarea
        className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded"
        rows="6"
        readOnly
        value={csvOutput}
      />
    </div>
  );
}
