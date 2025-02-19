import React, { useState } from "react";
import QRCode from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">QR Code Generator</h2>
      <Input
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        type="text"
        placeholder="Enter text or URL..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-center mb-4">
        {text && (
          <QRCode value={text} size={200} bgColor="#1a202c" fgColor="#ffffff" />
        )}
      </div>
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={() => setText("")}
      >
        Clear
      </Button>
    </div>
  );
}
