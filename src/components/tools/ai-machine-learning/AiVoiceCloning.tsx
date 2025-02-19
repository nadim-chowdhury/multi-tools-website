import React from "react";

export function AiVoiceCloning() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">AI Voice Cloning</h1>
        <p className="text-gray-600 mb-6">
          Clone voices with high accuracy using AI!
        </p>
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 transition-all duration-300">
          Clone Voice
        </button>
      </div>
    </div>
  );
}
