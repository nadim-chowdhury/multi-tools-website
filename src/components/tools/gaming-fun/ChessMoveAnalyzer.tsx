"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function ChessMoveAnalyzer() {
  const [move, setMove] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const analyzeMove = () => {
    // setAnalysis(`Analysis for move: ${move} (Feature requires external API).`);
    setAnalysis(null)
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Chess Move Analyzer</h2>
      <Input
        placeholder="Enter chess move (e.g., e4)"
        value={move}
        onChange={(e) => setMove(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={analyzeMove}
      >
        Analyze Move
      </Button>
      {analysis && <p className="mt-4 text-lg">{analysis}</p>}
    </div>
  );
}
