"use client";

import { useState, useRef, useEffect } from "react";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "DS-AI-ML",
  "Tools",
  "Design and Digital Art",
];

export default function Skills() {
  const [active, setActive] = useState("All");
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === "All"
      ? skills
      : skills.filter((s) => s.category === active);

  // ✅ only loop if enough items
  const shouldLoop = filtered.length >= 7;
  const displaySkills = shouldLoop ? [...filtered, ...filtered] : filtered;

  // ✅ manual scroll (only useful if many items)
  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 220;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
  const container = containerRef.current;
  if (!container || !shouldLoop || isHovered) return;

  const interval = setInterval(() => {
    container.scrollLeft += 2;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  }, 20);

  return () => clearInterval(interval);
}, [filtered, shouldLoop, isHovered]);

  const canScroll = filtered.length > 4;

  return (
    <div
      className="w-full mx-auto py-4 space-y-2 
      bg-cyan-950 border border-cyan-400/20 
      backdrop-blur-sm rounded-2xl"
    >
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm transition
              ${
                active === cat
                  ? "bg-cyan-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">

        {/* Arrows (only if needed) */}
        {canScroll && (
          <>
            <button
              onClick={() => scroll("left")}
            >
            </button>

            <button
              onClick={() => scroll("right")}
            >
            </button>
          </>
        )}

        {/* Scroll Row */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide py-6 px-2"
        >
          {displaySkills.map((s, i) => (
            <div key={i} className="shrink-0 w-40">
              <SkillCard title={s.title} icon={s.icon} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}