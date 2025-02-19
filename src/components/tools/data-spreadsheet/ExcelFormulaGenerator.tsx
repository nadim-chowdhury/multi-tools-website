import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ExcelFormulaGenerator() {
  const [description, setDescription] = useState("");
  const [formula, setFormula] = useState("");

  const generateFormula = () => {
    if (!description) return;

    // Simple mapping of descriptions to formulas (this can be expanded or replaced with AI-powered suggestions)
    const formulas = {
      "sum column A": "=SUM(A:A)",
      "average column B": "=AVERAGE(B:B)",
      "count rows in column C": "=COUNTA(C:C)",
      "max value in column D": "=MAX(D:D)",
      "min value in column E": "=MIN(E:E)",
    };

    setFormula(
      formulas[description.toLowerCase()] || "No matching formula found"
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Excel Formula Generator</h2>
      <Input
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        type="text"
        placeholder="Describe your formula..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={generateFormula}
      >
        Generate Formula
      </Button>
      <h3 className="text-lg font-semibold mt-4">Generated Formula:</h3>
      <Textarea
        className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded"
        rows="2"
        readOnly
        value={formula}
      />
    </div>
  );
}
