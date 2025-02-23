"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function RandomCharacterGenerator() {
  const characters: string[] = [
    "Knight",
    "Elf Archer",
    "Cyber Ninja",
    "Alien Overlord",
  ];
  const [character, setCharacter] = useState<string | null>(null);

  const generateCharacter = () => {
    setCharacter(characters[Math.floor(Math.random() * characters.length)]);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Random Character Generator</h2>
      <Button
        className="w-full bg-red-600 hover:bg-red-700"
        onClick={generateCharacter}
      >
        Generate Character
      </Button>
      {character && <p className="mt-4 text-lg">{character}</p>}
    </div>
  );
}
