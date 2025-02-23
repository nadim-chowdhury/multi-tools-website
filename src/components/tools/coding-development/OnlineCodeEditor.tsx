// import React, { useState } from "react";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Editor } from "@/components/ui/editor";

export default function OnlineCodeEditor() {
  // const [code, setCode] = useState("// Write your code here");

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Online Code Editor</h2>
      {/* <Editor
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        value={code}
        onChange={(newCode) => setCode(newCode)}
        language="javascript"
      /> */}
      <h3 className="text-lg font-semibold mt-4">Output:</h3>
      {/* <Textarea
        className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded"
        rows="6"
        readOnly
        value={code}
      /> */}
    </div>
  );
}
