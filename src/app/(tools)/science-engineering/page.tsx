"use client";

import React from "react";
import { useRouter } from "next/navigation";

const scienceEngineeringTools = [
  {
    name: "Physics Solver",
    description: "Solve physics equations and problems.",
    route: "/physics-solver",
  },
  {
    name: "Chemical Balancer",
    description: "Balance chemical equations.",
    route: "/chemical-balancer",
  },
  {
    name: "Resistor Calculator",
    description: "Calculate resistor values.",
    route: "/resistor-calculator",
  },
  {
    name: "3D Model Viewer",
    description: "View and analyze 3D models.",
    route: "/three-d-model-viewer",
  },
  {
    name: "AI Weather Forecast",
    description: "Get AI-powered weather forecasts.",
    route: "/ai-weather-forecast",
  },
];

export function ScienceEngineering() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Science & Engineering Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {scienceEngineeringTools.map((tool) => (
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



