"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function WaterIntakeCalculator() {
  const [weight, setWeight] = useState<string>("");
  const [intake, setIntake] = useState<number | null>(null);

  const calculateIntake = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) return;

    setIntake(parseFloat((weightNum * 0.033).toFixed(2)));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Water Intake Calculator</h2>
      <Input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="mb-4 text-black"
      />
      <Button
        className="w-full bg-cyan-600 hover:bg-cyan-700"
        onClick={calculateIntake}
      >
        Calculate
      </Button>
      {intake !== null && (
        <p className="mt-4 text-lg">Recommended Intake: {intake} L/day</p>
      )}
    </div>
  );
}
