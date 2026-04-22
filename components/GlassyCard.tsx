type GlassyCardProps = {
  image?: string;
  title: string;
  description?: string;
  TechStack?: string;
  exdescription?: string;
  links?: string;
};

export default function GlassyCard({
  image,
  title,
  description,
  TechStack,
  exdescription,
  links,
}: GlassyCardProps) {
  return (
    <div className="group w-full max-w-xs h-[300px] perspective-1000px">

      {/* INNER */}
      <div
        className="
          relative w-full h-full
          transition-transform duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >

        {/* FRONT */}
        <div
          className="
            absolute inset-0
            backface-hidden
            rounded-2xl overflow-hidden

            bg-white/5 backdrop-blur-md
            border border-cyan-400/20

            shadow-[0_0_25px_rgba(0,255,255,0.15)]
          "
        >
          {image && (
            <div className="h-32 w-full overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <div className="p-4 space-y-2 text-white">
            <h2 className="text-lg font-semibold text-cyan-300">
              {title}
            </h2>

            {description && (
              <p className="text-sm text-gray-300">
                {description}
              </p>
            )}

            {TechStack && (
              <p className="text-sm text-gray-400">
                <span className="text-cyan-400">Tech:</span> {TechStack}
              </p>
            )}
          </div>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0
            backface-hidden
            [transform:rotateY(180deg)]

            rounded-2xl
            bg-black/40 backdrop-blur-md
            border border-cyan-400/20

            p-4 text-white
            flex flex-col justify-between
          "
        >
          <div className="space-y-2 overflow-y-auto">

            {exdescription && (
              <p className="text-sm text-gray-300">
                {exdescription}
              </p>
            )}

          </div>

          {links && (
            <a
              href={links}
              target="_blank"
              className="
                mt-4 text-center
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
              View Project
            </a>
          )}
        </div>

      </div>
    </div>
  );
}