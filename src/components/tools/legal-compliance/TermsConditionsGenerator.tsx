function TermsConditionsGenerator() {
  const [terms, setTerms] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Terms & Conditions Generator</h2>
      <textarea
        className="w-full border p-2 rounded"
        rows="5"
        placeholder="Enter terms details..."
        value={terms}
        onChange={(e) => setTerms(e.target.value)}
      ></textarea>
      <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
        Generate
      </button>
    </div>
  );
}
