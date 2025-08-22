import { FaReact, FaNodeJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "REST APIs", icon: <MdApi className="text-gray-700" /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 text-black max-w-6xl mx-auto px-6"
    >
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* GitHub Stats Section */}
      <div className="mt-12 space-y-6 text-center">
        <h3 className="text-4xl font-bold text-center text-orange-500 mb-12">
          GitHub Stats
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {/* Stats Card */}
          <img
            src="https://github-readme-stats.vercel.app/api?username=Nasirimam&show_icons=true&theme=orange&hide_border=true"
            alt="GitHub Stats"
            className="mx-auto shadow-lg rounded-lg"
          />

          {/* Top Languages Card */}
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nasirimam&layout=compact&theme=orange&hide_border=true"
            alt="Top Languages"
            className="mx-auto shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
