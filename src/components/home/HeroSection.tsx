import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-xl">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-white leading-tight drop-shadow-lg playwrite-it-moderna-font">
          Empower Your Productivity with Multi-Tools
        </h1>
        <p className="text-lg text-white/90 mt-4">
          Discover a powerful suite of tools designed to streamline your tasks
          and enhance efficiency.
        </p>

        <div className="mt-8 playwrite-it-moderna-font">
          <Link href="#allTools">
            <Button className="bg-white hover:bg-violet-100 text-violet-600 rounded-full">
              Browse Tools
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
