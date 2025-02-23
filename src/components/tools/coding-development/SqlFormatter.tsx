"use client";

import React, { useState } from "react";
// import sqlFormatter from "sql-formatter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function SqlFormatter() {
  const [sqlInput, setSqlInput] = useState("");
  const [formattedSql, setFormattedSql] = useState("");

  const handleFormat = () => {
    try {
      // setFormattedSql(sqlFormatter.format(sqlInput));
    } catch (error) {
      console.log(" handleFormat ~ error:", error);
      setFormattedSql("Invalid SQL syntax");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">SQL Formatter</h2>
      <Textarea
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        rows={6}
        placeholder="Enter SQL query here..."
        value={sqlInput}
        onChange={(e) => setSqlInput(e.target.value)}
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleFormat}
      >
        Format SQL
      </Button>
      <h3 className="text-lg font-semibold mt-4">Formatted SQL:</h3>
      <Textarea
        className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded"
        rows={6}
        readOnly
        value={formattedSql}
      />
    </div>
  );
}
