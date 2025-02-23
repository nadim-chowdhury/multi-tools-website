"use client";

import React from "react";
import { useRouter } from "next/navigation";

const codingDevelopmentTools = [
  {
    name: "Online Code Editor",
    description: "Write and run code online.",
    route: "/online-code-editor",
  },
  {
    name: "CSS Minifier",
    description: "Minify your CSS files.",
    route: "/css-minifier",
  },
  {
    name: "CSS Beautifier",
    description: "Format and beautify CSS.",
    route: "/css-beautifier",
  },
  {
    name: "JS Minifier",
    description: "Minify JavaScript files.",
    route: "/js-minifier",
  },
  {
    name: "JS Beautifier",
    description: "Beautify JavaScript code.",
    route: "/js-beautifier",
  },
  {
    name: "JSON to CSV",
    description: "Convert JSON data to CSV.",
    route: "/json-to-csv",
  },
  {
    name: "CSV to JSON",
    description: "Convert CSV to JSON format.",
    route: "/csv-to-json",
  },
  {
    name: "QR Code Generator",
    description: "Generate QR codes easily.",
    route: "/qr-code-generator",
  },
  {
    name: "HTML to Markdown",
    description: "Convert HTML to Markdown.",
    route: "/html-to-markdown",
  },
  {
    name: "SQL Formatter",
    description: "Format SQL queries.",
    route: "/sql-formatter",
  },
  {
    name: "Website Speed Test",
    description: "Analyze website performance.",
    route: "/website-speed-test",
  },
];

export function CodingDevelopment() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Coding & Development Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {codingDevelopmentTools.map((tool) => (
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
