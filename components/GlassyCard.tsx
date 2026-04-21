type GlassyCardProps = {
  image?: string;
  title: string;
  description?: string;
  proficiency?: string;
  usedAt?: string;
};

export default function GlassyCard({
  image,
  title,
  description,
  proficiency,
  usedAt,
}: GlassyCardProps) {
  return (
    <div
      className="group relative w-full max-w-xs rounded-2xl overflow-hidden
      bg-white/5 backdrop-blur-md
      border border-cyan-400/20
      shadow-[0_0_25px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_35px_rgba(0,255,255,0.35)]
      transition-all duration-300"
    >
      {/* Image */}
      {image && (
        <div className="h-30 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3 text-white">
        
        {/* Title */}
        <h2 className="text-xl font-semibold text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        )}

        {/* Proficiency */}
        {proficiency && (
          <div className="text-sm text-gray-400">
            <span className="text-cyan-400 font-medium">Proficiency:</span>{" "}
            {proficiency}
          </div>
        )}

        {/* Used At */}
        {usedAt && (
          <div className="text-sm text-gray-400">
            <span className="text-cyan-400 font-medium">Used at:</span>{" "}
            {usedAt}
          </div>
        )}
      </div>
    </div>
  );
}