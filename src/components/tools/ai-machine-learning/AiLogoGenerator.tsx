"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust based on your UI components
import { Input } from "@/components/ui/input";

export default function AiLogoGenerator() {
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedLogo, setGeneratedLogo] = useState<string | null>(null);

  const handleGenerateLogo = async () => {
    if (!brandName.trim()) return;
    setLoading(true);
    setGeneratedLogo(null);

    // Simulating AI Logo Generation (Replace with actual API call)
    setTimeout(() => {
      setGeneratedLogo(`https://dummyimage.com/300x150/000/fff&text=${brandName}`);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-6">AI Logo Generator</h1>

      <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
        <Input
          type="text"
          placeholder="Enter your brand name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          className="w-full p-2 border rounded-md"
        />

        <Button
          onClick={handleGenerateLogo}
          className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Logo"}
        </Button>

        {generatedLogo && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Generated Logo:</h2>
            <img src={generatedLogo} alt="AI Logo" className="w-full rounded-lg shadow-md" />
          </div>
        )}
      </div>
    </div>
  );
}
