import React, { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Password Generator</h2>
        <input
          type="number"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          value={length}
          min="6"
          max="32"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generatePassword}
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-4 p-3 bg-gray-700 rounded break-all text-sm">
            <strong>Generated Password:</strong> {password}
          </div>
        )}
      </div>
    </div>
  );
}
