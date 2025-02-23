"use client";

import React from "react";
import { useRouter } from "next/navigation";

const imageDesignTools = [
  {
    name: "Image Compressor",
    description: "Compress images without losing quality.",
    route: "/image-compressor",
  },
  {
    name: "Image Resizer",
    description: "Resize images to desired dimensions.",
    route: "/image-resizer",
  },
  {
    name: "Image to Text",
    description: "Extract text from images.",
    route: "/image-to-text",
  },
  {
    name: "Image to PDF",
    description: "Convert images to PDF format.",
    route: "/image-to-pdf",
  },
  {
    name: "Photo Background Remover",
    description: "Remove background from photos.",
    route: "/photo-background-remover",
  },
  {
    name: "AI Image Generator",
    description: "Generate AI-powered images.",
    route: "/ai-image-generator",
  },
];

export function ImageDesign() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Image Design Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imageDesignTools.map((tool) => (
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
