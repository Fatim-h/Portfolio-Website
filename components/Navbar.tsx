"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  type Route = "/" | "/about" | "/projects" | "/contact";

  const linkStyle = (path: Route) =>
    `transition-colors ${
      pathname === path ? "text-white" : "text-gray-500 hover:text-white"
    }`;
  
    return (
    <nav className="flex p-6">
      
      <div className="pl-4 w-1/4">
      </div>

      <div className="w-2/4 flex justify-center space-x-20 
      [text-shadow:0_0_20px_rgba(0,255,255,0.6)]">
        <Link href="/" className={linkStyle("/")}>Home</Link>
        <Link href="/about" className={linkStyle("/about")}>About</Link>
        <Link href="/projects" className={linkStyle("/projects")}>Projects</Link>
        <Link href="/contact" className={linkStyle("/contact")}>Contact</Link>
      </div>

      <div className="w-1/4"></div>
      
    </nav>
  );
}