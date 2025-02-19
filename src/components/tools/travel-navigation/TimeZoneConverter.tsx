import React, { useState } from "react";

export default function TimeZoneConverter() {
  const [time, setTime] = useState("");
  const [fromZone, setFromZone] = useState("UTC");
  const [toZone, setToZone] = useState("UTC");
  const [convertedTime, setConvertedTime] = useState("");

  const handleConvert = () => {
    try {
      const date = new Date(`${time} UTC`);
      const options = {
        timeZone: toZone,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      };
      const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
        date
      );
      setConvertedTime(formattedTime);
    } catch (error) {
      setConvertedTime("Invalid Time");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Time Zone Converter</h2>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <select
        value={fromZone}
        onChange={(e) => setFromZone(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="UTC">UTC</option>
        <option value="America/New_York">New York (EST)</option>
        <option value="Europe/London">London (GMT)</option>
        <option value="Asia/Tokyo">Tokyo (JST)</option>
      </select>
      <select
        value={toZone}
        onChange={(e) => setToZone(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="UTC">UTC</option>
        <option value="America/New_York">New York (EST)</option>
        <option value="Europe/London">London (GMT)</option>
        <option value="Asia/Tokyo">Tokyo (JST)</option>
      </select>
      <button
        onClick={handleConvert}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Convert Time
      </button>
      {convertedTime && (
        <p className="text-gray-700">Converted Time: {convertedTime}</p>
      )}
    </div>
  );
}
