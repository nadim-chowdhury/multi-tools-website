import { Button } from "@/components/ui/button";

export function RandomMemeGenerator() {
  // const [meme, setMeme] = useState("");

  const fetchMeme = async () => {
    // const response = await fetch("https://meme-api.com/gimme");
    // const data = await response.json();
    // setMeme(data.url);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Random Meme Generator</h2>
      <Button
        className="w-full bg-yellow-600 hover:bg-yellow-700"
        onClick={fetchMeme}
      >
        Get a Meme
      </Button>
      {/* {meme && <img src={meme} alt="Random Meme" className="mt-4 rounded-lg" />} */}
    </div>
  );
}
