"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BmiCalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBmi = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || !heightNum) return;

    const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
    setBmi(parseFloat(bmiValue));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">BMI Calculator</h2>

      <Input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="mb-2 text-black"
      />
      <Input
        type="number"
        placeholder="Height (m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="mb-4 text-black"
      />

      <Button
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={calculateBmi}
      >
        Calculate BMI
      </Button>

      {bmi !== null && <p className="mt-4 text-lg">Your BMI: {bmi}</p>}
    </div>
  );
}
