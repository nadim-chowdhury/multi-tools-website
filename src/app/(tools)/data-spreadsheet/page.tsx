"use client";

import React from "react";
import { useRouter } from "next/navigation";

const dataSpreadSheetTools = [
  {
    name: "Excel Formula Generator",
    description: "Generate Excel formulas.",
    route: "/excel-formula-generator",
  },
  {
    name: "CSV to Excel",
    description: "Convert CSV files to Excel format.",
    route: "/csv-to-excel",
  },
  {
    name: "JSON to Excel",
    description: "Convert JSON data to Excel.",
    route: "/json-to-excel",
  },
  {
    name: "Chart Maker",
    description: "Create charts from data.",
    route: "/chart-maker",
  },
  {
    name: "Data Deduplication",
    description: "Remove duplicate entries in data.",
    route: "/data-deduplication",
  },
];

export function DataSpreadSheet() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Data & Spreadsheet Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataSpreadSheetTools.map((tool) => (
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
