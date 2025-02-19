export function SleepCycleCalculator() {
  const [wakeTime, setWakeTime] = useState("");
  const [suggestedTimes, setSuggestedTimes] = useState([]);

  const calculateSleepCycles = () => {
    if (!wakeTime) return;
    const wakeHour = parseInt(wakeTime.split(":"));
    const cycles = [9, 7.5, 6, 4.5].map(
      (cycle) => `${(wakeHour - cycle + 24) % 24}:00`
    );
    setSuggestedTimes(cycles);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Sleep Cycle Calculator</h2>
      <Input
        type="time"
        value={wakeTime}
        onChange={(e) => setWakeTime(e.target.value)}
        className="mb-4"
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
