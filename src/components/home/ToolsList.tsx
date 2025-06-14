import Link from "next/link";
import { toolsCategories } from "@/utils/toolsData";

export default function ToolsList() {
  return (
    <div id="allTools" className="mt-16">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        All Tools List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toolsCategories.map((category) => (
          <Link key={category.slug} href={`/${category.slug}`} passHref>
            <div className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl transition duration-300 cursor-pointer flex flex-col items-center text-center border border-gray-200 h-36">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600 text-sm flex-1">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
