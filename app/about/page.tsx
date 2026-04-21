import ProjectsCarousel from "@/components/ProjectsCarousel.tsx";
import Skills from "@/components/Skills.tsx";


export default function About() {
  return (
    <div className="w-[80%] mx-auto py-10 space-y-10">
      
      {/* About text */}
      <div>
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p>I am a Full-Stack Developer with experience in building web applications using Node.js, React, and 
Python, with exposure to AI/ML integrations and data-driven systems.</p>
      </div>

      {/*Skills*/}
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <Skills />

      {/*Projects*/}
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ProjectsCarousel />

    </div>
  );
}