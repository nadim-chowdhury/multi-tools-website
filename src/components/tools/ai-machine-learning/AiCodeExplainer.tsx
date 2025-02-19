"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea"; 
import { Button } from "@/components/ui/button"; 

export default function AiCodeExplainer() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  // Simulate AI processing
  const handleExplainCode = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setExplanation("");

    // Simulating an AI request (Replace with actual API call)
    setTimeout(() => {
      setExplanation(
        `This code snippet appears to be written in JavaScript. It defines a function and processes input. AI-powered explanations will provide deeper insights here.`
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">AI Code Explainer</h1>

      <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="w-full h-40 p-2 border rounded-md"
        />

        <Button
          onClick={handleExplainCode}
          className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Explain Code"}
        </Button>

        {explanation && (
          <div className="mt-6 p-4 bg-gray-100 border-l-4 border-blue-600 rounded-md">
            <h2 className="text-lg font-semibold mb-2">AI Explanation:</h2>
            <p className="text-gray-700">{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
