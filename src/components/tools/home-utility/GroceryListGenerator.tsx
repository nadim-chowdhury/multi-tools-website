export function GroceryListGenerator() {
  const [items, setItems] = useState("");
  const [list, setList] = useState([]);

  const addToList = () => {
    if (!items.trim()) return;
    setList([...list, items.trim()]);
    setItems("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Grocery List Generator</h2>
      <Input
        type="text"
        placeholder="Enter grocery item"
        value={items}
        onChange={(e) => setItems(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={addToList}
      >
        Add Item
      </Button>
      <ul className="mt-4 text-lg">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
