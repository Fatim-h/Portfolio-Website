"use client";

import { FaEnvelope } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <a
      href="mailto:fatimahriaz06@gmail.com"
      className="
        group
        fixed bottom-6 right-6 z-50

        flex items-center
        px-4 py-3 rounded-full

        bg-white/5 backdrop-blur-md
        border border-cyan-400/20

        text-cyan-200

        shadow-[0_0_20px_rgba(0,255,255,0.1)]
        hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]

        transition-all duration-300
        overflow-hidden

        w-[52px] hover:w-[160px]
      "
    >
      <FaEnvelope className="text-xl shrink-0" />

      <span className="
        whitespace-nowrap
        ml-2
        opacity-0
        group-hover:opacity-100
        transition-all duration-300
        text-white
      ">
          Contact Me
      </span>
    </a>
  );
}