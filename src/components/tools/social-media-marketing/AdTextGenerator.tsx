import React, { useState } from "react";

export default function AdTextGenerator() {
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [generatedAd, setGeneratedAd] = useState("");

  const generateAdText = async () => {
    if (!product || !audience) {
      alert("Please enter product details and target audience");
      return;
    }

    setGeneratedAd(
      `Boost your ${product} sales! Perfect for ${audience}. Get yours today!`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Ad Text Generator</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter Product/Service..."
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter Target Audience..."
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateAdText}
        >
          Generate Ad Text
        </button>
        {generatedAd && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm text-left">
            <p>{generatedAd}</p>
          </div>
        )}
      </div>
    </div>
  );
}
