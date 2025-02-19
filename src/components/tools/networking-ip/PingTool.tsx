function PingTool() {
  const [host, setHost] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Ping Tool</h2>
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Enter hostname or IP"
        value={host}
        onChange={(e) => setHost(e.target.value)}
      />
      <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded">
        Ping
      </button>
    </div>
  );
}
