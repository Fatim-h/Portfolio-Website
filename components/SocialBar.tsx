import { FaGithub, FaLinkedin, FaPinterest } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      <div className="w-px h-24 bg-gray-600 mt-2"></div>

      <a href="https://github.com/Fatim-h" target="_blank">
        <FaGithub className="text-gray-400 hover:text-white text-2xl transition" />
      </a>

      <a href="https://www.linkedin.com/in/fatimah-riaz-o6j/" target="_blank">
        <FaLinkedin className="text-gray-400 hover:text-white text-2xl transition" />
      </a>

      <a href="https://www.pinterest.com/penanagains/_created" target="_blank">
        <FaPinterest className="text-gray-400 hover:text-white text-2xl transition" />
      </a>

      <div className="w-px h-24 bg-gray-600 mt-2"></div>

    </div>
  );
}