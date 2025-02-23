import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook },
  { href: "https://twitter.com", icon: Twitter },
  { href: "https://instagram.com", icon: Instagram },
  { href: "https://linkedin.com", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Multi-Tools</h2>
          <p className="mt-2 text-sm">
            Your one-stop platform for all essential tools to boost
            productivity.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <nav className="mt-3 space-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-400 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            {socialLinks.map(({ href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6 text-gray-400 hover:text-white transition" />
              </Link>
            ))}
          </div>

          <div className="mt-3">
            Developed by{" "}
            <Link
              href="https://nadim.vercel.app"
              target="_blank"
              className="text-white"
            >
              Nadim Chowdhury
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Multi-Tools. All rights reserved.
      </div>
    </footer>
  );
}
