"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  type Route = "/" | "/about" | "/projects" | "/contact";

  const linkStyle = (path: Route) =>
    `transition-colors ${
      pathname === path ? "text-white" : "text-gray-500 hover:text-white"
    }`;

  return (
    <nav className="flex items-center justify-between p-6">

      {/* Left spacer (kept for your layout balance) */}
      <div className="pl-4"></div>

      {/* Desktop menu */}
      <div
        className="hidden md:flex space-x-20 
        [text-shadow:0_0_20px_rgba(0,255,255,0.6)]"
      >
        <Link href="/" className={linkStyle("/")}>Home</Link>
        <Link href="/about" className={linkStyle("/about")}>About</Link>
        <Link href="/projects" className={linkStyle("/projects")}>Projects</Link>
        <Link href="/contact" className={linkStyle("/contact")}>Contact</Link>
      </div>

      {/* Right side */}
      <div className="flex items-center">
        {/* Hamburger (mobile only, now properly aligned right) */}
        <button
          className="md:hidden text-white text-2xl ml-auto z-70"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <>
          {/* Blur background */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-md z-60"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div
            className="absolute top-20 left-0 w-full flex flex-col items-center space-y-6 py-6 
            bg-gradient-to-b from-black/5 via-black/50 to-black/70 
            backdrop-blur-sm 
            border-l border-r border-b border-cyan-400/20 
            rounded-b-2xl md:hidden z-100
            [text-shadow:0_0_20px_rgba(0,255,255,0.6)]"
          >
            <Link href="/" className={linkStyle("/")} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={linkStyle("/about")} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/projects" className={linkStyle("/projects")} onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/contact" className={linkStyle("/contact")} onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </>
      )}
    </nav>
  );
}