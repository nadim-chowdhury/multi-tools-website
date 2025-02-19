function PortScanner() {
  const [target, setTarget] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Port Scanner</h2>
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Enter IP or domain"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Scan Ports
      </button>
    </div>
  );
}
