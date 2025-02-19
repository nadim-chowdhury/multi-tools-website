export function AiThumbnailCreator() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">AI Thumbnail Creator</h1>
        <p className="text-gray-600 mb-6">
          Generate stunning thumbnails for your videos with AI!
        </p>
        <button className="w-full bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition-all duration-300">
          Create Thumbnail
        </button>
      </div>
    </div>
  );
}
