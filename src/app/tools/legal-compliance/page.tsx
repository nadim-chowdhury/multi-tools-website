"use client";

import React from "react";
import { useRouter } from "next/navigation";

const legalComplianceTools = [
  {
    name: "Privacy Policy Generator",
    description: "Generate a privacy policy for your site.",
    route: "/privacy-policy-generator",
  },
  {
    name: "Terms & Conditions Generator",
    description: "Create terms and conditions for your business.",
    route: "/terms-conditions-generator",
  },
  {
    name: "Contract Template Generator",
    description: "Generate contract templates.",
    route: "/contract-template-generator",
  },
  {
    name: "Digital Signature Creator",
    description: "Create digital signatures.",
    route: "/digital-signature-creator",
  },
  {
    name: "GDPR Compliance Checker",
    description: "Ensure your site complies with GDPR.",
    route: "/gdpr-compliance-checker",
  },
];

export function LegalCompliance() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Legal Compliance Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {legalComplianceTools.map((tool) => (
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
