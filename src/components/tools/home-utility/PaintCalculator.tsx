export function PaintCalculator() {
  const [area, setArea] = useState("");
  const [paintNeeded, setPaintNeeded] = useState(null);

  const calculatePaint = () => {
    if (!area) return;
    setPaintNeeded((area / 10).toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Paint Calculator</h2>
      <Input
        type="number"
        placeholder="Enter area (sq meters)"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-purple-600 hover:bg-purple-700"
        onClick={calculatePaint}
      >
        Calculate
      </Button>
      {paintNeeded && (
        <p className="mt-4 text-lg">Paint Needed: {paintNeeded} liters</p>
      )}
    </div>
  );
}
