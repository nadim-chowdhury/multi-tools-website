export function EsportsTeamNameGenerator() {
  const names = [
    "Shadow Titans",
    "Pixel Warriors",
    "Cyber Phantoms",
    "Glitch Raiders",
  ];
  const [name, setName] = useState(null);

  const generateName = () => {
    setName(names[Math.floor(Math.random() * names.length)]);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Esports Team Name Generator</h2>
      <Button
        className="w-full bg-purple-600 hover:bg-purple-700"
        onClick={generateName}
      >
        Generate Name
      </Button>
      {name && <p className="mt-4 text-lg">{name}</p>}
    </div>
  );
}
