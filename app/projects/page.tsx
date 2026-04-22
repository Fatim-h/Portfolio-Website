import GlassyCard from "@/components/GlassyCard";
import { projects } from "@/data/projects";

export default function Project() {
  return (
    <div className="w-[85%] mx-auto py-12 space-y-10">

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Projects
        </h1>
        <p className="text-gray-400">
          A collection of my work across web development, AI/ML, and design.
        </p>
      </div>

      {/* Gallery */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          justify-items-center
        "
      >
        {projects.map((project, i) => (
          <GlassyCard key={i} {...project} />
        ))}
      </div>

    </div>
  );
}