export function AiImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    if (!prompt) return;
    // Mock API call or implementation
    setImage(
      `https://dummyimage.com/400x400/000/fff&text=${encodeURIComponent(
        prompt
      )}`
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">AI Image Generator</h2>
      <Textarea
        placeholder="Enter image description"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={generateImage}
      >
        Generate Image
      </Button>
      {image && <img src={image} alt="Generated" className="mt-4 rounded-lg" />}
    </div>
  );
}
