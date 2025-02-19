"use client";

import React from "react";
import { useRouter } from "next/navigation";

const seoWebAnalysisTools = [
  {
    name: "Keyword Research Tool",
    description: "Find high-ranking keywords.",
    route: "/keyword-research-tool",
  },
  {
    name: "Backlink Checker",
    description: "Analyze backlink profiles.",
    route: "/backlink-checker",
  },
  {
    name: "Domain Age Checker",
    description: "Check the age of a domain.",
    route: "/domain-age-checker",
  },
  {
    name: "Google Index Checker",
    description: "See if your pages are indexed by Google.",
    route: "/google-index-checker",
  },
  {
    name: "Meta Tag Generator",
    description: "Generate SEO-friendly meta tags.",
    route: "/meta-tag-generator",
  },
];

export function SeoWebAnalysis() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        SEO & Web Analysis Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {seoWebAnalysisTools.map((tool) => (
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
