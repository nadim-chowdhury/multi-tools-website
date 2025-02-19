export function MeditationSoundGenerator() {
  const [sound, setSound] = useState("Rain");

  return (
    <div className="p-4 bg-green-100 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">Meditation Sound Generator</h2>
      <p>Select a sound for relaxation:</p>
      <select
        className="mt-2 p-2 border rounded"
        value={sound}
        onChange={(e) => setSound(e.target.value)}
      >
        <option>Rain</option>
        <option>Ocean</option>
        <option>Forest</option>
      </select>
      <p className="mt-2">Now playing: {sound}</p>
    </div>
  );
}
