import React, { useState } from "react";

export default function IpAddressLookup() {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState(null);

  const fetchIpAddress = async () => {
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);

      const locationResponse = await fetch(`https://ipapi.co/${data.ip}/json/`);
      const locationData = await locationResponse.json();
      setLocation(locationData);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">IP Address Lookup</h2>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={fetchIpAddress}
        >
          Get My IP Address
        </button>
        {ip && (
          <div className="mt-4 p-3 bg-gray-700 rounded break-all text-sm">
            <strong>IP Address:</strong> {ip}
          </div>
        )}
        {location && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            <strong>Location:</strong> {location.city}, {location.region},{" "}
            {location.country_name}
          </div>
        )}
      </div>
    </div>
  );
}
