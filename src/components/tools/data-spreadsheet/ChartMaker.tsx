"use client";

import React, { useState } from "react";
// import { Bar } from "react-chartjs-2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartMaker() {
  const [labels, setLabels] = useState("");
  const [values, setValues] = useState("");
  // const [chartData, setChartData] = useState(null);

  const handleGenerateChart = () => {
    const labelArray = labels.split(",").map((label) => label.trim());
    const valueArray = values.split(",").map((val) => parseFloat(val.trim()));

    if (labelArray.length !== valueArray.length) {
      alert("Labels and values must have the same number of elements");
      return;
    }

    // setChartData({
    //   labels: labelArray,
    //   datasets: [
    //     {
    //       label: "Dataset",
    //       data: valueArray,
    //       backgroundColor: "rgba(75, 192, 192, 0.5)",
    //     },
    //   ],
    // });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Chart Maker</h2>
      <Input
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        type="text"
        placeholder="Enter labels (comma separated)..."
        value={labels}
        onChange={(e) => setLabels(e.target.value)}
      />
      <Input
        className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        type="text"
        placeholder="Enter values (comma separated)..."
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleGenerateChart}
      >
        Generate Chart
      </Button>
      {/* {chartData && (
        <div className="mt-6">
          <Bar data={chartData} />
        </div>
      )} */}
    </div>
  );
}
