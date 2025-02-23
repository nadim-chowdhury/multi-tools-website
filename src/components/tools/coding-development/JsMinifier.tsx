"use client";

import React, { useState } from "react";
import { minify } from "terser";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function JsMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleMinify = async () => {
    try {
      const result = await minify(input);
      setOutput(result.code || "");
    } catch (error) {
      console.log(" handleMinify ~ error:", error);
      setOutput("Error minifying JavaScript");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">JavaScript Minifier</h2>
      <Textarea
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        rows={6}
        placeholder="Enter JavaScript code here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleMinify}
      >
        Minify Code
      </Button>
      <h3 className="text-lg font-semibold mt-4">Minified Output:</h3>
      <Textarea
        className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded"
        rows={6}
        readOnly
        value={output}
      />
    </div>
  );
}
