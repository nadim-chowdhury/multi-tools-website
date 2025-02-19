import React, { useState } from "react";

export default function OnlineVirusScanner() {
  const [file, setFile] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleScan = async () => {
    if (!file) {
      alert("Please select a file to scan.");
      return;
    }
    setLoading(true);
    setScanResult(null);

    // Simulating a virus scan process
    setTimeout(() => {
      setScanResult({ status: "Safe", message: "No threats detected!" });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Online Virus Scanner</h2>
        <input
          type="file"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          onChange={handleFileChange}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleScan}
          disabled={loading}
        >
          {loading ? "Scanning..." : "Scan File"}
        </button>
        {scanResult && (
          <div
            className={`mt-4 p-3 rounded text-sm ${
              scanResult.status === "Safe" ? "bg-green-700" : "bg-red-700"
            }`}
          >
            <strong>Status:</strong> {scanResult.status} - {scanResult.message}
          </div>
        )}
      </div>
    </div>
  );
}
