import React, { useState } from "react";

export default function EmailValidator() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(emailRegex.test(email));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Email Validator</h2>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        onClick={validateEmail}
        className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
      >
        Validate
      </button>
      {isValid !== null && (
        <div
          className={`mt-4 p-4 rounded shadow ${
            isValid ? "bg-green-200" : "bg-red-200"
          }`}
        >
          <h3 className="text-lg font-semibold">
            {isValid ? "Valid Email Address ✅" : "Invalid Email Address ❌"}
          </h3>
        </div>
      )}
    </div>
  );
}
