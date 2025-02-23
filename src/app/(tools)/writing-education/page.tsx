"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function WritingEducation() {
  const tools = [
    {
      name: "Citation Generator",
      description: "Generate citations in multiple formats.",
      route: "/citation-generator",
    },
    {
      name: "Book Summary Generator",
      description: "Summarize books quickly and effectively.",
      route: "/book-summary-generator",
    },
    {
      name: "Essay Paraphraser",
      description: "Rephrase essays to improve clarity and uniqueness.",
      route: "/essay-paraphraser",
    },
    {
      name: "Flashcard Creator",
      description: "Create digital flashcards for studying.",
      route: "/flashcard-creator",
    },
    {
      name: "Reading Time Estimator",
      description: "Estimate the reading time for any text.",
      route: "/reading-time-estimator",
    },
  ];

    const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Writing & Education Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
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
