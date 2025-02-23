"use client";

import React from "react";
import { useRouter } from "next/navigation";

const gamingFunTools = [
  {
    name: "Random Character Generator",
    description: "Generate random characters.",
    route: "/random-character-generator",
  },
  {
    name: "Chess Move Analyzer",
    description: "Analyze chess moves.",
    route: "/chess-move-analyzer",
  },
  {
    name: "Esports Team Name Generator",
    description: "Generate esports team names.",
    route: "/esports-team-name-generator",
  },
  {
    name: "Minecraft Seed Finder",
    description: "Find Minecraft seeds.",
    route: "/minecraft-seed-finder",
  },
  {
    name: "Crossword Puzzle Generator",
    description: "Create crossword puzzles.",
    route: "/crossword-puzzle-generator",
  },
];

export function GamingFun() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Gaming & Fun Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gamingFunTools.map((tool) => (
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
