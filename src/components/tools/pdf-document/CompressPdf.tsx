export function CompressPdf() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCompress = () => {
    if (file) {
      alert(`Compressing: ${file.name}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Compress PDF</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 w-full rounded-md"
      />
      <button
        onClick={handleCompress}
        className="w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Compress
      </button>
    </div>
  );
}
