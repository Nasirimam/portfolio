import Aos from "aos";
import { useEffect } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Voting App",
      description:
        "A university voting system built with MERN stack, allowing secure authentication and real-time vote counting.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Admin Dashboard",
        "JWT",
        "Bcrypt",
        "Authentication",
        "Authorization",
        "Responsive",
      ],
      image: "/Votingimg.png",
      demo: "#",
      github: "https://github.com/Nasirimam/VotingApp",
      link: "https://voting-app-delta-ecru.vercel.app/",
    },
    {
      title: "NaStream – Chat & Video Call App",
      description:
        "A real-time chat and video calling application built using MERN stack with WebRTC and Socket.io for fast, low-latency communication.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "WebRTC",
        "Socket.io",
        "JWT",
        "Video Call",
        "Real-Time Chat",
        "Responsive",
      ],
      image: "/nastream.png",
      demo: "#",
      github: "https://github.com/Nasirimam/chat",
      link: "https://chat-app-three-blond.vercel.app/",
    },
    {
      title: "Good Food",
      description:
        "Enjoy a hassle-free way to order food. Create an account, add items to your persistent cart, and checkout quickly through a simple, user-friendly interface.",
      tech: ["React", "Redux", "Node.js", "MongoDB", "Authentication "],
      image: "/goodfoodimg.png",
      demo: "#",
      github: "https://github.com/Nasirimam/new-good-food",
      link: "https://new-good-food.vercel.app/",
    },
    {
      title: "R.P.S.N Vacation",
      description:
        "Tripoto is a travel Booking website, for providing end to end solution to to your travelling by making your bookings handy.",
      tech: ["React", "Node.js", "FireBase", "TeamLead", "Material UI"],
      image: "/rsvpimg.png",
      demo: "https://drive.google.com/file/d/1IWD-rN5k36ExOGFJA0HIFy4BoIEYBmwf/view?usp=sharing",
      github: "https://github.com/Nasirimam/R.P.S.N-Vacation",
      link: "https://rpsn-vacations.netlify.app/",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 2000 }); // 1s fade animation
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-white text-black max-w-6xl mx-auto px-6 mb-20"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-between"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            {/* Project Image */}
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition"
              />
            </a>

            {/* Title & Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Demo & GitHub Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-black text-center transition"
              >
                Demo Video
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-black text-center transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
