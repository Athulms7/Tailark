"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Features", href: "#Features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Appbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className=" top-0 z-50 w-full bg-gray-200 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="bg-gradient-to-br from-gray-300 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent font-bold text-xl">
            Webzee
          </span>
        </Link>

        {/* Hamburger menu toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="lg:hidden text-black dark:text-white"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
            >
              {item.name}
            </Link>
          ))}
          <Button
            size="sm"
            className="ml-3 bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Start Trial
          </Button>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start px-6 py-4 space-y-4 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)} // Close on click
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm"
            >
              {item.name}
            </Link>
          ))}
          <Button
            size="sm"
            className="bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Start Trial
          </Button>
        </div>
      </div>
    </header>
  );
}
