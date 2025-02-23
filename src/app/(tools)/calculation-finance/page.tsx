"use client";

import React from "react";
import { useRouter } from "next/navigation";

const calculationFinanceTools = [
  {
    name: "Loan Calculator",
    description: "Calculate loan payments.",
    route: "/loan-calculator",
  },
  {
    name: "Tax Calculator",
    description: "Estimate tax amounts.",
    route: "/tax-calculator",
  },
  {
    name: "Currency Converter",
    description: "Convert between currencies.",
    route: "/currency-converter",
  },
  {
    name: "Percentage Calculator",
    description: "Calculate percentages easily.",
    route: "/percentage-calculator",
  },
  {
    name: "Age Calculator",
    description: "Find out your exact age.",
    route: "/age-calculator",
  },
  {
    name: "Salary to Hourly Calculator",
    description: "Convert salary to hourly wage.",
    route: "/salary-to-hourly-calculator",
  },
  {
    name: "Unit Converter",
    description: "Convert between units of measurement.",
    route: "/unit-converter",
  },
];

export function CalculationFinance() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Calculation & Finance Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {calculationFinanceTools.map((tool) => (
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
