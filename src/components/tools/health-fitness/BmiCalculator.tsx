export function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    if (!weight || !height) return;
    const bmiValue = (weight / (height * height)).toFixed(2);
    setBmi(bmiValue);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">BMI Calculator</h2>
      <Input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="mb-2"
      />
      <Input
        type="number"
        placeholder="Height (m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={calculateBmi}
      >
        Calculate BMI
      </Button>
      {bmi && <p className="mt-4 text-lg">Your BMI: {bmi}</p>}
    </div>
  );
}
