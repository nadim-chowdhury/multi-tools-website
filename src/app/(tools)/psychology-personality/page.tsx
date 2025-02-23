"use client";

import React from "react";
import { useRouter } from "next/navigation";

const psychologyPersonalityTools = [
  {
    name: "MBTI Personality Test",
    description: "Discover your MBTI personality type.",
    route: "/mbti-personality-test",
  },
  {
    name: "Love Language Test",
    description: "Find out your love language.",
    route: "/love-language-test",
  },
  {
    name: "Mental Health Checker",
    description: "Assess your mental health.",
    route: "/mental-health-checker",
  },
  {
    name: "Meditation Sound Generator",
    description: "Generate relaxing meditation sounds.",
    route: "/meditation-sound-generator",
  },
];

export function PsychologyPersonality() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Psychology & Personality Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {psychologyPersonalityTools.map((tool) => (
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
