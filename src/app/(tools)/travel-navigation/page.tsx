"use client";

import React from "react";
import { useRouter } from "next/navigation";

export function TravelNavigation() {
  const tools = [
    {
      name: "Flight Price Tracker",
      description: "Track flight price changes over time.",
      route: "/flight-price-tracker",
    },
    {
      name: "Train Seat Checker",
      description: "Check train seat availability.",
      route: "/train-seat-checker",
    },
    {
      name: "Toll Cost Calculator",
      description: "Estimate toll costs for your journey.",
      route: "/toll-cost-calculator",
    },
    {
      name: "Itinerary Generator",
      description: "Create travel itineraries easily.",
      route: "/itinerary-generator",
    },
    {
      name: "Time Zone Converter",
      description: "Convert time zones for accurate scheduling.",
      route: "/time-zone-converter",
    },
  ];

    const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Travel & Navigation Tools
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
