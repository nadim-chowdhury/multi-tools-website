function WhoisLookup() {
  const [domain, setDomain] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">WHOIS Lookup</h2>
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Enter domain"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded">
        Lookup
      </button>
    </div>
  );
}
