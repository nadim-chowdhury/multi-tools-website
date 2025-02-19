export function MortgageCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    if (!principal || !rate || !years) return;
    const r = rate / 100 / 12;
    const n = years * 12;
    const payment = (principal * r) / (1 - Math.pow(1 + r, -n));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Mortgage Calculator</h2>
      <Input
        type="number"
        placeholder="Loan Amount"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        className="mb-2"
      />
      <Input
        type="number"
        placeholder="Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="mb-2"
      />
      <Input
        type="number"
        placeholder="Loan Term (years)"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-red-600 hover:bg-red-700"
        onClick={calculateMortgage}
      >
        Calculate
      </Button>
      {monthlyPayment && (
        <p className="mt-4 text-lg">Monthly Payment: ${monthlyPayment}</p>
      )}
    </div>
  );
}
