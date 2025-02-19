export function AiVideoSummarizer() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">AI Video Summarizer</h1>
        <p className="text-gray-600 mb-6">
          Get concise summaries of your videos powered by AI!
        </p>
        <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-xl hover:bg-purple-600 transition-all duration-300">
          Summarize Video
        </button>
      </div>
    </div>
  );
}