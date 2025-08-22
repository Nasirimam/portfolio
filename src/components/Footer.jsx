import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Nasir Imam. All Rights Reserved.
        </p>

        {/* Quick Links */}
        <div className="flex gap-6 text-sm">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-400 transition"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-400 transition"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-400 transition"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-400 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
