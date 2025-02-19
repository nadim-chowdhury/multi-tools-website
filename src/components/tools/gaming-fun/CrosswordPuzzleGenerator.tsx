export function CrosswordPuzzleGenerator() {
  const [puzzle, setPuzzle] = useState(null);

  const generatePuzzle = () => {
    setPuzzle("Generated crossword puzzle (Feature requires external API).");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Crossword Puzzle Generator</h2>
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={generatePuzzle}
      >
        Generate Puzzle
      </Button>
      {puzzle && <p className="mt-4 text-lg">{puzzle}</p>}
    </div>
  );
}
