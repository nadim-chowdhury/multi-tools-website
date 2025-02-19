export function WaterIntakeCalculator() {
  const [weight, setWeight] = useState("");
  const [intake, setIntake] = useState(null);

  const calculateIntake = () => {
    if (!weight) return;
    setIntake((weight * 0.033).toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Water Intake Calculator</h2>
      <Input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-cyan-600 hover:bg-cyan-700"
        onClick={calculateIntake}
      >
        Calculate
      </Button>
      {intake && (
        <p className="mt-4 text-lg">Recommended Intake: {intake} L/day</p>
      )}
    </div>
  );
}
