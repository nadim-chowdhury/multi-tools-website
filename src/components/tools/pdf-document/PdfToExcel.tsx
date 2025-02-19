export function PdfToExcel() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = () => {
    if (file) {
      alert(`Converting PDF to Excel: ${file.name}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">PDF to Excel</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 w-full rounded-md"
      />
      <button
        onClick={handleConvert}
        className="w-full bg-yellow-500 text-white p-2 rounded-md"
      >
        Convert
      </button>
    </div>
  );
}
