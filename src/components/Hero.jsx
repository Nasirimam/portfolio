import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-orange-100 to-white pt-25"
    >
      <h1 className="text-5xl font-bold text-black mb-4">
        Hi, I'm <span className="text-orange-500">Nasir Imam</span>
      </h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        MERN Stack Developer
      </h2>

      <p className="text-gray-600 max-w-xl mb-6">
        Passionate about building modern web applications using MongoDB,
        Express.js, React, and Node.js (MERN stack). I enjoy creating scalable,
        fast, and user-friendly solutions with clean code and optimized
        performance. Skilled in implementing RESTful APIs, state management
        (Redux), and responsive UI with Tailwind CSS. Enthusiastic about
        problem-solving, collaborating in agile teams, and continuously learning
        new technologies to deliver impactful digital experiences.
      </p>
      <Link
        to="projects"
        smooth={true}
        duration={1000}
        className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-black transition cursor-pointer"
      >
        View My Work
      </Link>
    </section>
  );
}
