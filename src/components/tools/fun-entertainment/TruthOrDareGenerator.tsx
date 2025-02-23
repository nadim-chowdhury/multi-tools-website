import { Button } from "@/components/ui/button";

export function TruthOrDareGenerator() {
  // const options = ["Truth", "Dare"];
  // const [result, setResult] = useState(null);

  const getTruthOrDare = () => {
    // setResult(options[Math.floor(Math.random() * options.length)]);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Truth or Dare</h2>
      <Button
        className="w-full bg-red-600 hover:bg-red-700"
        onClick={getTruthOrDare}
      >
        Generate
      </Button>
      {/* {result && <p className="mt-4 text-lg">{result}!</p>} */}
    </div>
  );
}
