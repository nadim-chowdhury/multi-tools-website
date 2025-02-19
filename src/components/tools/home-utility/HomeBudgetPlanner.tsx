export function HomeBudgetPlanner() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [balance, setBalance] = useState(null);

  const calculateBudget = () => {
    if (!income || !expenses) return;
    setBalance((income - expenses).toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Home Budget Planner</h2>
      <Input
        type="number"
        placeholder="Enter total income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="mb-2"
      />
      <Input
        type="number"
        placeholder="Enter total expenses"
        value={expenses}
        onChange={(e) => setExpenses(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-yellow-600 hover:bg-yellow-700"
        onClick={calculateBudget}
      >
        Calculate
      </Button>
      {balance && <p className="mt-4 text-lg">Balance: ${balance}</p>}
    </div>
  );
}
