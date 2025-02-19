function PrivacyPolicyGenerator() {
  const [policy, setPolicy] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Privacy Policy Generator</h2>
      <textarea
        className="w-full border p-2 rounded"
        rows="5"
        placeholder="Enter policy details..."
        value={policy}
        onChange={(e) => setPolicy(e.target.value)}
      ></textarea>
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Generate
      </button>
    </div>
  );
}
