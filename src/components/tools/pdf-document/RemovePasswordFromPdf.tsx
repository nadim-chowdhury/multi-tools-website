export function RemovePasswordFromPdf() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRemovePassword = () => {
    if (file) {
      alert(`Removing password from: ${file.name}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Remove Password from PDF</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 w-full rounded-md"
      />
      <button
        onClick={handleRemovePassword}
        className="w-full bg-gray-500 text-white p-2 rounded-md"
      >
        Remove Password
      </button>
    </div>
  );
}
