"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust based on your UI components
import { Input } from "@/components/ui/input"; // Adjust import based on your UI library

export default function AiFaceSwapper() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleFaceSwap = async () => {
    if (!image) return;
    setLoading(true);
    setResultImage(null);

    // Simulating AI face swap processing (Replace with actual API call)
    setTimeout(() => {
      setResultImage(image); // In real use case, replace with AI-processed image
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-6">AI Face Swapper</h1>

      <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <div className="mt-4 relative w-full h-64">
            <Image
              src={image}
              alt="Uploaded"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}

        <Button
          onClick={handleFaceSwap}
          className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Swapping Faces..." : "Swap Face"}
        </Button>

        {resultImage && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Processed Image:</h2>
            <div className="relative w-full h-64">
              <Image
                src={resultImage}
                alt="Face Swapped"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
