"use client";

import React from "react";
import { useRouter } from "next/navigation";

const socialMediaMarketingTools = [
  {
    name: "Hashtag Generator",
    description: "Generate trending hashtags for your posts.",
    route: "/hashtag-generator",
  },
  {
    name: "Social Media Post Scheduler",
    description: "Schedule posts across multiple platforms.",
    route: "/social-media-post-scheduler",
  },
  {
    name: "YouTube Title Generator",
    description: "Create engaging YouTube video titles.",
    route: "/youtube-title-generator",
  },
  {
    name: "Ad Text Generator",
    description: "Generate high-converting ad copies.",
    route: "/ad-text-generator",
  },
  {
    name: "Twitter Engagement Calculator",
    description: "Analyze Twitter engagement metrics.",
    route: "/twitter-engagement-calculator",
  },
];

export function SocialMediaMarketing() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Social Media Marketing Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {socialMediaMarketingTools.map((tool) => (
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



