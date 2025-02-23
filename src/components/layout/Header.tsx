import Link from "next/link";
import { Button } from "../ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="container mx-auto py-4">
      <div className="flex justify-between items-center playwrite-it-moderna-font">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Multi-Tools
        </Link>

        <nav className="flex space-x-6 transition-all duration-300 font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="default"
          className="bg-violet-500 text-white rounded-full hover:bg-violet-700"
        >
          Login
        </Button>
      </div>
    </header>
  );
}
