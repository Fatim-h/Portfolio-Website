"use client";

import { useState } from "react";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";
import { useRef } from "react";

const categories = ["All", "Frontend", "Backend", "Data Science", "Tools", "Design"];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? skills
      : skills.filter((s) => s.category === active);

    const containerRef = useRef<HTMLDivElement>(null);

const scroll = (direction: "left" | "right") => {
  const container = containerRef.current;
  if (!container) return;

  const scrollAmount = 300;

  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

  return (
    <div className="w-full mx-auto py-10 space-y-8 bg-cyan-950 border-cyan-400/20 
          backdrop-blur-sm   rounded-2xl">

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 px-10">
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

      {/* Skills Carousel */}
<div className="relative px-10 ">

  {/* Left Arrow */}
  <button
    onClick={() => scroll("left")}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10
    text-white text-2xl bg-black/30 px-3 py-2 rounded-full
    hover:bg-cyan-500/30 transition"
  >
    {"<"}
  </button>

  {/* Right Arrow */}
  <button
    onClick={() => scroll("right")}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10
    text-white text-2xl bg-black/30 px-3 py-2 rounded-full
    hover:bg-cyan-500/30 transition"
  >
    {">"}
  </button>

  {/* Scroll Row */}
  <div
    ref={containerRef}
    className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-hide px-10 py-8"
  >
    {filtered.map((s, i) => (
      <div key={i} className="flex-shrink-0 w-[240px]">
        <SkillCard
          title={s.title}
          level={s.level}
          icon={s.icon}
        />
      </div>
    ))}
  </div>

</div>

    </div>
  );
}