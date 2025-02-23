import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Mp3ToOgg() {
  // const [file, setFile] = useState(null);

  const handleConvert = () => {
    // if (!file) return;
    alert("MP3 to OGG conversion requires an external tool or API.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">MP3 to OGG Converter</h2>
      <Input
        type="file"
        accept="audio/mp3"
        // onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleConvert}
      >
        Convert to OGG
      </Button>
    </div>
  );
}
