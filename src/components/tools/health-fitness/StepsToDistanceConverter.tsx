export function StepsToDistanceConverter() {
  const [steps, setSteps] = useState("");
  const [distance, setDistance] = useState(null);

  const convertStepsToDistance = () => {
    if (!steps) return;
    setDistance((steps * 0.0008).toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Steps to Distance Converter</h2>
      <Input
        type="number"
        placeholder="Enter steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-yellow-600 hover:bg-yellow-700"
        onClick={convertStepsToDistance}
      >
        Convert
      </Button>
      {distance && <p className="mt-4 text-lg">Distance: {distance} km</p>}
    </div>
  );
}
