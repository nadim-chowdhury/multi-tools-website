"use client";

import React from "react";
import { useRouter } from "next/navigation";

const homeUtilityTools = [
  {
    name: "Electricity Bill Estimator",
    description: "Estimate your electricity bill.",
    route: "/electricity-bill-estimator",
  },
  {
    name: "Paint Calculator",
    description: "Calculate the amount of paint needed.",
    route: "/paint-calculator",
  },
  {
    name: "Mortgage Calculator",
    description: "Calculate mortgage payments.",
    route: "/mortgage-calculator",
  },
  {
    name: "Home Budget Planner",
    description: "Plan your monthly home budget.",
    route: "/home-budget-planner",
  },
  {
    name: "Grocery List Generator",
    description: "Generate a smart grocery list.",
    route: "/grocery-list-generator",
  },
];

export function HomeUtility() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Home Utility Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {homeUtilityTools.map((tool) => (
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
