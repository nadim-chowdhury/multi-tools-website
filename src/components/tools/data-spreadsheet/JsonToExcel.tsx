"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { utils, writeFile } from "xlsx";

export default function JsonToExcel() {
  const [jsonInput, setJsonInput] = useState("");

  const handleConvert = () => {
    if (!jsonInput) return;
    try {
      const jsonData = JSON.parse(jsonInput);
      const worksheet = utils.json_to_sheet(jsonData);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, "Sheet1");
      writeFile(workbook, "converted.xlsx");
    } catch (error) {
      console.log(" handleConvert ~ error:", error);
      alert("Invalid JSON format");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">JSON to Excel Converter</h2>
      <Textarea
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        rows={6}
        placeholder="Enter JSON data here..."
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleConvert}
      >
        Convert to Excel
      </Button>
    </div>
  );
}
