import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WebsiteSpeedTest() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleTestSpeed = async () => {
    if (!url) return;
    setLoading(true);
    try {
      // Simulating API call
      setTimeout(() => {
        setResult({ loadTime: "1.2s", performance: "90%" });
        setLoading(false);
      }, 2000);
    } catch (error) {
      setResult(null);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Website Speed Test</h2>
      <Input
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        type="text"
        placeholder="Enter website URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleTestSpeed}
        disabled={loading}
      >
        {loading ? "Testing..." : "Test Speed"}
      </Button>
      {result && (
        <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded">
          <h3 className="text-lg font-semibold">Results:</h3>
          <p>Load Time: {result.loadTime}</p>
          <p>Performance: {result.performance}</p>
        </div>
      )}
    </div>
  );
}
