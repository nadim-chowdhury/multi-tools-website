export function MergePdf() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleMerge = () => {
    if (files.length) {
      alert(`Merging: ${files.map((file) => file.name).join(", ")}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Merge PDFs</h2>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="border p-2 w-full rounded-md"
      />
      <button
        onClick={handleMerge}
        className="w-full bg-red-500 text-white p-2 rounded-md"
      >
        Merge
      </button>
    </div>
  );
}
