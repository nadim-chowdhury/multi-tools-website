export function RandomJokeGenerator() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Random Joke Generator</h2>
      <Button
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={fetchJoke}
      >
        Get a Joke
      </Button>
      {joke && <p className="mt-4 text-lg">{joke}</p>}
    </div>
  );
}
