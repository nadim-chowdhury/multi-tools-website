"use client";

import React from "react";
import { useRouter } from "next/navigation";

const pdfDocumentTools = [
  {
    name: "PDF to Word",
    description: "Convert PDF files to Word documents.",
    route: "/pdf-to-word",
  },
  {
    name: "PDF to Excel",
    description: "Convert PDF files to Excel spreadsheets.",
    route: "/pdf-to-excel",
  },
  {
    name: "PDF to JPG",
    description: "Convert PDF files to JPG images.",
    route: "/pdf-to-jpg",
  },
  {
    name: "Merge PDF",
    description: "Merge multiple PDF files.",
    route: "/merge-pdf",
  },
  {
    name: "Split PDF",
    description: "Split a PDF file into multiple pages.",
    route: "/split-pdf",
  },
  {
    name: "Compress PDF",
    description: "Reduce the size of a PDF file.",
    route: "/compress-pdf",
  },
];

export function PdfDocument() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        PDF Document Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pdfDocumentTools.map((tool) => (
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
