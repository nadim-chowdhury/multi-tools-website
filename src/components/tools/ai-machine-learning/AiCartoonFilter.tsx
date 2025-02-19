"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function AiCartoonFilter() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cartoonImage, setCartoonImage] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Simulate applying AI cartoon filter
  const applyCartoonFilter = () => {
    if (!image) return;
    setLoading(true);

    // Simulating AI processing with a delay
    setTimeout(() => {
      setCartoonImage(image); // In real implementation, this should be replaced with processed image data
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-6">AI Cartoon Filter</h1>

      <div className="flex flex-col items-center gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 rounded-md cursor-pointer"
        />

        {image && (
          <div className="relative w-64 h-64">
            <Image
              src={image}
              alt="Uploaded"
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-md"
            />
          </div>
        )}

        <button
          onClick={applyCartoonFilter}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Processing..." : "Apply Cartoon Filter"}
        </button>

        {cartoonImage && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Cartoonized Image</h2>
            <div className="relative w-64 h-64">
              <Image
                src={cartoonImage}
                alt="Cartoonized"
                layout="fill"
                objectFit="cover"
                className="rounded-md shadow-md"
              />
            </div>
            <a
              href={cartoonImage}
              download="cartoonized-image.png"
              className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
