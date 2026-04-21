"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <Link href="/contact">
      <button
        className="
fixed bottom-6 right-6 z-50
px-6 py-3 rounded-full
bg-cyan-400 text-black font-medium

shadow-[0_0_15px_rgba(0,255,255,0.6)]
hover:shadow-[0_0_30px_rgba(0,255,255,1)]

hover:bg-white hover:text-cyan-400
hover:scale-105

transition-all duration-300
"
      >
        Contact Me
      </button>
    </Link>
  );
}