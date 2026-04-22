import ProjectsCarousel from "@/components/ProjectsCarousel";
import Skills from "@/components/Skills";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const projectCount = projects.length;
const techCount = new Set(skills.map((s) => s.title)).size;

const stats = [
  { label: "Domains", value: "AI / Web / Design" },
  { label: "Projects", value: `${projectCount}+` },
  { label: "Technologies", value: `${techCount}+` },
];

export default function About() {
  return (
    <div className="w-[80%] mx-auto py-10 space-y-10">
      
      <div>
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
      
        {/* About text */}
        <div className="w-[80%] ">
          <p className="text-gray-300 leading-relaxed">
            I’m a full-stack developer with experience in AI/ML, combining technical
            development with design and storytelling. I build modern web applications,
            work with data and machine learning models, and create visually engaging interfaces.
          </p>
        </div>
      
        {/* Stats row */}
        <div className="mt-6 flex flex-wrap gap-4 justify-start">
      
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex-1 min-w-35 p-4 rounded-xl
              bg-white/5 backdrop-blur-md
              border border-cyan-400/20
              text-center
              shadow-[0_0_20px_rgba(0,255,255,0.1)]
              hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
              transition"
            >
              <p className="text-2xl font-bold text-cyan-300
                drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
                {item.value}
              </p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
      
        </div>
      </div>

      {/*Skills*/}
      <h1 className="text-3xl font-bold mb-4">Tech Stack</h1>
      <Skills />

      {/*Projects*/}
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ProjectsCarousel />
      
    </div>
  );
}