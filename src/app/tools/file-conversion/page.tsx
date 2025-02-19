"use client";

import React from "react";
import { useRouter } from "next/navigation";

const fileConversionTools = [
  {
    name: "MP3 to WAV",
    description: "Convert MP3 audio to WAV format.",
    route: "/mp3-to-wav",
  },
  {
    name: "MP3 to FLAC",
    description: "Convert MP3 audio to FLAC format.",
    route: "/mp3-to-flac",
  },
  {
    name: "MP3 to OGG",
    description: "Convert MP3 audio to OGG format.",
    route: "/mp3-to-ogg",
  },
  {
    name: "Video to Audio",
    description: "Extract audio from videos.",
    route: "/video-to-audio",
  },
  {
    name: "GIF to MP4",
    description: "Convert GIFs to MP4 format.",
    route: "/gif-to-mp4",
  },
  {
    name: "ZIP Extractor",
    description: "Extract files from ZIP archives.",
    route: "/zip-extractor",
  },
  {
    name: "RAR Extractor",
    description: "Extract files from RAR archives.",
    route: "/rar-extractor",
  },
  {
    name: "HEIC to JPG",
    description: "Convert HEIC images to JPG.",
    route: "/heic-to-jpg",
  },
];

export function FileConversion() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        File Conversion Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fileConversionTools.map((tool) => (
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
