export function PdfWatermarkAdder() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddWatermark = () => {
    if (file) {
      alert(`Adding watermark to: ${file.name}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Add Watermark to PDF</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 w-full rounded-md"
      />
      <button
        onClick={handleAddWatermark}
        className="w-full bg-indigo-500 text-white p-2 rounded-md"
      >
        Add Watermark
      </button>
    </div>
  );
}
