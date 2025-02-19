"use client";

import React from "react";
import { useRouter } from "next/navigation";

const funEntertainmentTools = [
  {
    name: "Random Joke Generator",
    description: "Get a random joke.",
    route: "/random-joke-generator",
  },
  {
    name: "Random Meme Generator",
    description: "Generate random memes.",
    route: "/random-meme-generator",
  },
  {
    name: "Truth or Dare Generator",
    description: "Play truth or dare.",
    route: "/truth-or-dare-generator",
  },
  {
    name: "Would You Rather",
    description: "Play Would You Rather questions.",
    route: "/would-you-rather",
  },
  {
    name: "Online Dice Roller",
    description: "Roll dice online.",
    route: "/online-dice-roller",
  },
  {
    name: "Spin The Wheel",
    description: "Spin a random decision wheel.",
    route: "/spin-the-wheel",
  },
];

export function FunEntertainment() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Fun & Entertainment Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {funEntertainmentTools.map((tool) => (
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
