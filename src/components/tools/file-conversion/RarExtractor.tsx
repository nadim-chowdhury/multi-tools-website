export function RarExtractor() {
  const [file, setFile] = useState(null);

  const handleExtract = () => {
    if (!file) return;
    alert("RAR extraction requires an external tool or API.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">RAR Extractor</h2>
      <Input
        type="file"
        accept=".rar"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={handleExtract}
      >
        Extract RAR
      </Button>
    </div>
  );
}
