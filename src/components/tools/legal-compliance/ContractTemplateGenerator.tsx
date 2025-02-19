function ContractTemplateGenerator() {
  const [contract, setContract] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Contract Template Generator</h2>
      <textarea
        className="w-full border p-2 rounded"
        rows="5"
        placeholder="Enter contract details..."
        value={contract}
        onChange={(e) => setContract(e.target.value)}
      ></textarea>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Generate
      </button>
    </div>
  );
}
