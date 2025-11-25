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
import { useEffect } from "react";
import Aos from "aos";
import { FaPython } from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiDjango } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "REST APIs", icon: <MdApi className="text-gray-700" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-600" /> },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 }); // 1s fade animation
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 text-black max-w-6xl mx-auto px-6"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            data-aos="flip-left"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
