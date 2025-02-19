import React, { useState } from "react";

export default function VpnProxyDetector() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkVpnProxy = async () => {
    setLoading(true);
    setResult(null);
    try {
      const ipResponse = await fetch("https://api64.ipify.org?format=json");
      const ipData = await ipResponse.json();
      setIp(ipData.ip);

      const proxyResponse = await fetch(
        `https://vpnapi.io/api/${ipData.ip}?key=YOUR_API_KEY`
      );
      const proxyData = await proxyResponse.json();
      setResult(proxyData.security);
    } catch (error) {
      console.error("Error detecting VPN/Proxy:", error);
      setResult({ error: "Failed to detect VPN/Proxy" });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">VPN/Proxy Detector</h2>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={checkVpnProxy}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check VPN/Proxy"}
        </button>
        {ip && <p className="text-sm">Your IP: {ip}</p>}
        {result && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            {result.error ? (
              <p className="text-red-400">{result.error}</p>
            ) : (
              <>
                <p>
                  <strong>VPN:</strong> {result.vpn ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Proxy:</strong> {result.proxy ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Tor:</strong> {result.tor ? "Yes" : "No"}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
