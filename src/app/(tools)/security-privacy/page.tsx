"use client";

import React from "react";
import { useRouter } from "next/navigation";

const securityPrivacyTools = [
  {
    name: "Password Generator",
    description: "Generate strong passwords.",
    route: "/password-generator",
  },
  {
    name: "Hash Generator",
    description: "Generate cryptographic hashes.",
    route: "/hash-generator",
  },
  {
    name: "IP Address Lookup",
    description: "Find details about an IP address.",
    route: "/ip-address-lookup",
  },
  {
    name: "VPN Proxy Detector",
    description: "Detect if an IP is using a VPN or proxy.",
    route: "/vpn-proxy-detector",
  },
  {
    name: "Online Virus Scanner",
    description: "Scan files for viruses online.",
    route: "/online-virus-scanner",
  },
];

export function SecurityPrivacy() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Security & Privacy Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {securityPrivacyTools.map((tool) => (
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
