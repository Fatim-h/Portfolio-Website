"use client";

import { useRef, useState } from "react";
import GlassyCard from "./GlassyCard";
import { projects } from "@/data/projects";

export default function ProjectsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 300; // fixed card width + gap feel
    container.scrollTo({
      left: i * cardWidth,
      behavior: "smooth",
    });
  };

  const next = () => {
    const newIndex = Math.min(index + 1, projects.length - 1);
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prev = () => {
    const newIndex = Math.max(index - 1, 0);
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="relative mt-10">

      {/* Left button */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
        text-white text-3xl
        bg-black/30 hover:bg-cyan-500/30
        px-3 py-2 rounded-full transition"
      >
        {"<"}
      </button>

      {/* Right button */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
        text-white text-3xl
        bg-black/30 hover:bg-cyan-500/30
        px-3 py-2 rounded-full transition"
      >
        {">"}
      </button>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth gap-6 px-10 py-8 scrollbar-hide"
      >
        {projects.map((p, i) => (
          <div key={i} className="shrink-0 w-70">
            <GlassyCard {...p} />
          </div>
        ))}
      </div>
    </div>
  );
}