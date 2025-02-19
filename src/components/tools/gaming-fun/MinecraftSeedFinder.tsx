export function MinecraftSeedFinder() {
  const [seed, setSeed] = useState(null);

  const findSeed = () => {
    setSeed(`Random Minecraft Seed: ${Math.floor(Math.random() * 100000000)}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Minecraft Seed Finder</h2>
      <Button
        className="w-full bg-yellow-600 hover:bg-yellow-700"
        onClick={findSeed}
      >
        Find a Seed
      </Button>
      {seed && <p className="mt-4 text-lg">{seed}</p>}
    </div>
  );
}
