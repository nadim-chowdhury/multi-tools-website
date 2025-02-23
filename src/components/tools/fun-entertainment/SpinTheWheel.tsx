import { Button } from "@/components/ui/button";

export function SpinTheWheel() {
  // const options = [
  //   "Win",
  //   "Lose",
  //   "Try Again",
  //   "Jackpot",
  //   "Better Luck Next Time",
  // ];
  // const [result, setResult] = useState(null);

  const spinWheel = () => {
    // const randomIndex = Math.floor(Math.random() * options.length);
    // setResult(options[randomIndex]);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Spin The Wheel</h2>
      <Button
        className="w-full bg-purple-600 hover:bg-purple-700"
        onClick={spinWheel}
      >
        Spin
      </Button>
      {/* {result && <p className="mt-4 text-lg">Result: {result}</p>} */}
    </div>
  );
}
