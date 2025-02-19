export default function AiResumeOptimizer() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">AI Resume Optimizer</h1>
        <p className="text-gray-600 mb-6">
          Upload your resume and get AI-powered suggestions to improve it!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Resume
            </label>
            <input
              type="file"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-all duration-300"
          >
            Optimize Resume
          </button>
        </form>
      </div>
    </div>
  );
}
