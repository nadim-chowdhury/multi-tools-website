import React, { useState } from "react";
import { format } from "xml-formatter";

export default function XmlFormatter() {
  const [xml, setXml] = useState("");
  const [formattedXml, setFormattedXml] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    try {
      setFormattedXml(format(xml, { indentation: "  " }));
      setError("");
    } catch (err) {
      setError("Invalid XML format");
      setFormattedXml("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">XML Formatter</h2>
      <textarea
        value={xml}
        onChange={(e) => setXml(e.target.value)}
        placeholder="Paste XML here..."
        className="w-full p-2 border rounded mb-2"
        rows="6"
      />
      <button
        onClick={handleFormat}
        className="w-full p-2 bg-blue-500 text-white rounded mb-2"
      >
        Format XML
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <pre className="p-2 bg-white rounded border overflow-auto">
        {formattedXml}
      </pre>
    </div>
  );
}
