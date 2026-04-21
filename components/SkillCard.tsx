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

export default function SkillCard({ title, icon: Icon }: SkillProps) {
  return (
    <div
      className="w-full max-w-40 p-4
      transition-all duration-300
      hover:text-cyan-200
      hover:drop-shadow-[0_0_18px_rgba(34,211,238,1)]">
      {/* Icon + Title */}
        <div className="flex flex-col items-center gap-2 mb-3 text-white">
          <Icon className="text-2xl text-cyan-300 
           drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <h3 className="font-semibold">{title}</h3>
        </div>
    </div>
  );
}