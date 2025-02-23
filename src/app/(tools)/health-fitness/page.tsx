"use client";

import React from "react";
import { useRouter } from "next/navigation";

const healthFitnessTools = [
  {
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index.",
    route: "/bmi-calculator",
  },
  {
    name: "Calorie Counter",
    description: "Track your daily calorie intake.",
    route: "/calorie-counter",
  },
  {
    name: "Water Intake Calculator",
    description: "Determine your ideal water intake.",
    route: "/water-intake-calculator",
  },
  {
    name: "Sleep Cycle Calculator",
    description: "Optimize your sleep schedule.",
    route: "/sleep-cycle-calculator",
  },
  {
    name: "Steps to Distance Converter",
    description: "Convert steps to distance walked.",
    route: "/steps-to-distance-converter",
  },
];

export function HealthFitness() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Health & Fitness Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {healthFitnessTools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition cursor-pointer"
            onClick={() => router.push(tool.route)}
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {tool.name}
            </h2>
            <p className="text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
