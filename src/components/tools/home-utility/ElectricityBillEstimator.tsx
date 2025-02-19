export function ElectricityBillEstimator() {
  const [units, setUnits] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [totalCost, setTotalCost] = useState(null);

  const calculateBill = () => {
    if (!units || !costPerUnit) return;
    setTotalCost((units * costPerUnit).toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Electricity Bill Estimator</h2>
      <Input
        type="number"
        placeholder="Enter units consumed"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
        className="mb-2"
      />
      <Input
        type="number"
        placeholder="Cost per unit"
        value={costPerUnit}
        onChange={(e) => setCostPerUnit(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={calculateBill}
      >
        Calculate
      </Button>
      {totalCost && (
        <p className="mt-4 text-lg">Estimated Bill: ${totalCost}</p>
      )}
    </div>
  );
}
