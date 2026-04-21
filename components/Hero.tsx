import { Roboto_Serif } from "next/font/google";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const skills = ["Next.js", "React.js", "Node.js", "Python", "LLMs", "GraphRAG", "RAG"];

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[80vh]">
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-20">
        
        {/* IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-10 soft-pulse"></div>
          <img
            src="/profile.png"
            alt="profile"
            className="relative w-96 md:w-[450px] rounded-full"
          />
        </div>

        <div className="hidden md:block w-px h-60 bg-linear-to-b from-transparent via-gray-700 to-transparent mx-6"></div>

        {/* TEXT */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className={`${robotoSerif.className} text-5xl md:text-6xl font-light tracking-tighter mb-6
          [text-shadow:0_0_10px_rgba(0,255,255,0.8),0_0_40px_rgba(0,255,255,0.4)]`}>
            Hello World!
          </h1>

          <p className="text-gray-300 mb-2">
            I'm <span className="text-cyan-400 font-semibold">Fatimah Riaz</span>.
            A Full-Stack Developer now developing AI(ML) applications
          </p>

          <p className="text-gray-400 mb-4">
            Currently focused on LLM applications, GraphRAG, 
            and modern frameworks like Next.js to create scalable, intelligent software          
          </p>

          <div className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs text-cyan-300 border border-gray-500 bg-cyan-800/50 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 justify-center md:justify-start">
            <button
              className="
                bg-cyan-400
                hover:bg-cyan-200
                transition-all duration-300
                px-6 py-3 rounded-lg
                text-sm font-medium text-white
                hover:text-cyan-800
                shadow-[0_0_10px_rgba(34,211,238,0.5)]
                hover:shadow-[0_0_20px_rgba(34,211,238,0.9),0_0_40px_rgba(34,211,238,0.4)]
              "
            >
              Download CV
            </button>

             <a href="/projects"
              className=" text-gray-500 hover:text-white transition-colors px-6 py-3 rounded-lg text-sm font-medium"
            >
              View Projects →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}