"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SleepCycleCalculator() {
  const [wakeTime, setWakeTime] = useState<string>("");
  const [suggestedTimes, setSuggestedTimes] = useState<string[]>([]);

  const calculateSleepCycles = () => {
    if (!wakeTime) return;

    const [wakeHour, wakeMinute] = wakeTime.split(":").map(Number);
    if (isNaN(wakeHour) || isNaN(wakeMinute)) return;

    const cycleDurations = [9, 7.5, 6, 4.5];
    const cycles = cycleDurations.map((cycle) => {
      const sleepHour = (wakeHour - cycle + 24) % 24;
      return `${String(Math.floor(sleepHour)).padStart(2, "0")}:${String(
        wakeMinute
      ).padStart(2, "0")}`;
    });

    setSuggestedTimes(cycles);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Sleep Cycle Calculator</h2>
      <Input
        type="time"
        value={wakeTime}
        onChange={(e) => setWakeTime(e.target.value)}
        className="mb-4 text-black"
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={calculateSleepCycles}
      >
        Calculate
      </Button>
      {suggestedTimes.length > 0 && (
        <p className="mt-4 text-lg">
          Best Sleep Times: {suggestedTimes.join(", ")}
        </p>
      )}
    </div>
  );
}
