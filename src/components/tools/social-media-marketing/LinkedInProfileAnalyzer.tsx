import React, { useState } from "react";

export default function LinkedInProfileAnalyzer() {
  const [profileUrl, setProfileUrl] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeProfile = async () => {
    if (!profileUrl.trim()) {
      alert("Please enter a LinkedIn profile URL");
      return;
    }
    setLoading(true);
    setAnalysisResult(null);

    try {
      const response = await fetch(
        `https://api.example.com/linkedin-analyze?url=${encodeURIComponent(
          profileUrl
        )}`
      );
      const data = await response.json();
      setAnalysisResult(data);
    } catch (error) {
      console.error("Error analyzing profile:", error);
      setAnalysisResult({ error: "Failed to analyze LinkedIn profile" });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">LinkedIn Profile Analyzer</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter LinkedIn Profile URL..."
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={analyzeProfile}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Profile"}
        </button>
        {analysisResult && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm text-left">
            {analysisResult.error ? (
              <p className="text-red-400">{analysisResult.error}</p>
            ) : (
              <pre className="whitespace-pre-wrap break-all">
                {JSON.stringify(analysisResult, null, 2)}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
