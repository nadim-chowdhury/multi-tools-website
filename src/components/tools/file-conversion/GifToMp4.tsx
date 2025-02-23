// import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { utils, writeFile } from "xlsx";

export function GifToMp4() {
  // const [file, setFile] = useState(null);

  const handleConvert = () => {
    // if (!file) return;
    alert(
      "GIF to MP4 conversion is not supported in-browser. Use an API or backend service."
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">GIF to MP4 Converter</h2>
      <Input
        type="file"
        accept="image/gif"
        // onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleConvert}
      >
        Convert to MP4
      </Button>
    </div>
  );
}
