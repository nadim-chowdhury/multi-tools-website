"use client";

import React from "react";
import { useRouter } from "next/navigation";

const networkingIpTools = [
  {
    name: "IP Geolocation Finder",
    description: "Find the location of an IP address.",
    route: "/ip-geolocation-finder",
  },
  {
    name: "DNS Lookup",
    description: "Check DNS records of a domain.",
    route: "/dns-lookup",
  },
  {
    name: "Ping Tool",
    description: "Test network connectivity.",
    route: "/ping-tool",
  },
  {
    name: "Traceroute Tool",
    description: "Trace the route packets take.",
    route: "/traceroute-tool",
  },
  {
    name: "Port Scanner",
    description: "Scan open network ports.",
    route: "/port-scanner",
  },
  {
    name: "Whois Lookup",
    description: "Get domain registration details.",
    route: "/whois-lookup",
  },
];

export function NetworkingIp() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Networking & IP Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {networkingIpTools.map((tool) => (
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



