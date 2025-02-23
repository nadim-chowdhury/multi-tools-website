import { Button } from "@/components/ui/button";

export function OnlineDiceRoller() {
  // const [result, setResult] = useState(null);

  const rollDice = () => {
    // setResult(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Online Dice Roller</h2>
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={rollDice}
      >
        Roll Dice
      </Button>
      {/* {result && <p className="mt-4 text-lg">You rolled a {result}!</p>} */}
    </div>
  );
}
