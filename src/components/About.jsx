import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-white text-black max-w-6xl mx-auto px-6"
      data-aos="fade-up"
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
          <p className="text-lg text-gray-700 mb-6">
            Hi! I’m <span className="font-semibold">Nasir Imam</span>, a
            passionate
            <span className="text-orange-500">
              {" "}
              Full Stack Developer (Python + MERN)
            </span>
            who loves building scalable, user-friendly, and high-performance web
            applications. I enjoy working with Python, SQL, and the MERN stack
            to create real-time features, clean architectures, and smooth user
            experiences. I’m always learning new technologies, exploring
            problem-solving techniques, and improving my skills to build better
            digital solutions.
          </p>

          {/* Skills Breakdown */}
          <div className="space-y-4 text-left max-w-3xl mx-auto md:mx-0 mb-6">
            <p data-aos="fade-right">
              <span className="font-semibold text-orange-500">Front-End:</span>{" "}
              Expertise in creating responsive and dynamic UIs with React,
              JavaScript (ES6+), and Tailwind CSS, along with strong
              understanding of state management.
            </p>

            <p data-aos="fade-right">
              <span className="font-semibold text-orange-500">Back-End:</span>{" "}
              Experience building secure and scalable APIs using Python
              (Django/Flask), Node.js, and Express.js, with a strong focus on
              backend architecture.
            </p>

            <p data-aos="fade-right">
              <span className="font-semibold text-orange-500">Database:</span>{" "}
              Hands-on experience with SQL databases (MySQL/PostgreSQL) and
              NoSQL databases like MongoDB, including schema design and
              optimization.
            </p>

            <p data-aos="fade-right">
              <span className="font-semibold text-orange-500">
                Additional Tools:
              </span>{" "}
              Proficient with Git/GitHub, RESTful APIs, Socket.io, WebRTC,
              Firebase, HTML5, CSS3, and deployment tools such as Vercel and
              Netlify.
            </p>
          </div>

          <p className="mt-4 text-lg text-gray-700">
            I am actively looking for an opportunity where I can contribute to
            real-world projects, use modern technologies, and grow as a full
            stack developer.
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
