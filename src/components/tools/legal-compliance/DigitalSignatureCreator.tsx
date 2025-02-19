function DigitalSignatureCreator() {
  const [signature, setSignature] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Digital Signature Creator</h2>
      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Enter your name"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
      />
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Create Signature
      </button>
    </div>
  );
}
