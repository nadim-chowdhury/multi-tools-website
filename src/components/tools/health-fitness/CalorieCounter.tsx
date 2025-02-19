export function CalorieCounter() {
  const [calories, setCalories] = useState("");
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Calorie Counter</h2>
      <Input
        type="number"
        placeholder="Enter calories consumed"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        className="mb-4"
      />
      <p className="mt-4 text-lg">Total Calories: {calories}</p>
    </div>
  );
}
