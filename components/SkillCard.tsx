import { IconType } from "react-icons";

type SkillProps = {
  title: string;
  level: number;
  icon: IconType;
};

const getColor = (level: number) => {
  if (level >= 80) return "bg-green-400";
  if (level >= 60) return "bg-cyan-400";
  if (level >= 40) return "bg-yellow-400";
  return "bg-red-400";
};

export default function SkillCard({ title, level, icon: Icon }: SkillProps) {
  return (
    <div
      className="w-full max-w-[260px] p-5 rounded-2xl
      bg-white/10 backdrop-blur-md
      border border-cyan-400/20
      shadow-[0_0_20px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
      transition-all"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-3 text-white">
        <Icon className="text-2xl text-cyan-300" />
        <h3 className="font-semibold">{title}</h3>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor(level)} shadow-[0_0_10px_rgba(34,211,238,0.5)] rounded-full`}
          style={{ width: `${level}%` }}
        />
      </div>

      <p className="text-xs text-gray-400 mt-2">{level}%</p>
    </div>
  );
}