import { Link } from "react-scroll";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white text-black max-w-6xl mx-auto px-6"
    >
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-orange-200 flex items-center justify-center text-3xl font-bold text-orange-600 shadow-md overflow-hidden">
            <img
              src="/myimg.jpg"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-700 mb-4">
            Hi! I’m <span className="font-semibold">Nasir Imam</span>, a
            passionate{" "}
            <span className="text-orange-500">MERN Stack Developer</span>. I
            love crafting responsive, user-friendly, and scalable web
            applications. My focus is on delivering clean code and seamless user
            experiences.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            When I’m not coding, I enjoy exploring new technologies, learning
            problem-solving techniques, and contributing to open-source
            projects.
          </p>

          {/* Skills Breakdown */}
          <div className="space-y-4 text-left max-w-3xl mx-auto md:mx-0 mb-6">
            <p>
              <span className="font-semibold text-orange-500">Front-End:</span>{" "}
              Expertise in building dynamic UIs with React, JavaScript (ES6+),
              and state management libraries.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Back-End:</span>{" "}
              Skilled in developing secure and scalable server-side applications
              using Node.js and Express.js.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Database:</span>{" "}
              Experience in designing and managing NoSQL databases with MongoDB
              and Mongoose.
            </p>
            <p>
              <span className="font-semibold text-orange-500">
                Additional Tools:
              </span>{" "}
              Proficient with Git, RESTful APIs, HTML5, CSS3, and Tailwind CSS.
            </p>
          </div>

          <p className="mt-4 text-lg text-gray-700">
            I am actively looking for a role where I can solve challenging
            problems and continue to grow as a developer.
          </p>

          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-black transition cursor-pointer"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
