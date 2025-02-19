import React, { useState } from 'react';

export default function PhysicsSolver() {
  const [formula, setFormula] = useState('');
  const [variables, setVariables] = useState({});
  const [result, setResult] = useState(null);

  const solvePhysics = () => {
    try {
      const parsedFormula = formula.replace(/([a-zA-Z]+)/g, (match) => variables[match] || match);
      const evaluatedResult = eval(parsedFormula);
      setResult(evaluatedResult);
    } catch (error) {
      alert('Error solving equation');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Physics Solver</h2>
      <input
        type="text"
        placeholder="Enter formula (e.g., v = u + a*t)"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <textarea
        placeholder="Enter values as JSON (e.g., { \"u\": 10, \"a\": 2, \"t\": 5 })"
        onChange={(e) => setVariables(JSON.parse(e.target.value))}
        className="border p-2 w-full rounded mt-2"
      ></textarea>
      <button onClick={solvePhysics} className="mt-2 p-2 bg-purple-500 text-white rounded w-full">
        Solve Equation
      </button>
      {result !== null && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
