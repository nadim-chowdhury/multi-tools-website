import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Multi-Tools
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your one-stop solution for all your tool needs. Explore our wide range
          of tools designed to make your tasks easier and more efficient.
        </p>
        <Link href="/tools">
          <span className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition">
            Browse Tools
          </span>
        </Link>
      </div>
    </section>
  );
}
