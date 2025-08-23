import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-orange-500 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <Link to="hero" className="text-2xl font-bold cursor-pointer">
            Nasir Imam
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-70}
              spy={true}
              activeClass="text-black font-bold"
              className="cursor-pointer hover:text-black transition"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={800}
              offset={-70}
              spy={true}
              activeClass="text-black font-bold"
              className="cursor-pointer hover:text-black transition"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-70}
              spy={true}
              activeClass="text-black font-bold"
              className="cursor-pointer hover:text-black transition"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              spy={true}
              activeClass="text-black font-bold"
              className="cursor-pointer hover:text-black transition"
            >
              Contact
            </Link>

            {/* Resume Button */}
            <a
              href="/Nasir_Imam_Resume_2025.pdf"
              download
              className="flex items-center gap-2 hover:text-black transition"
            >
              Resume
              <FaDownload className="text-white-400" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-500 text-white shadow-md">
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-70}
            onClick={handleLinkClick}
            className="block px-4 py-2 cursor-pointer hover:bg-black hover:text-white"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={800}
            offset={-70}
            onClick={handleLinkClick}
            className="block px-4 py-2 cursor-pointer hover:bg-black hover:text-white"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-70}
            onClick={handleLinkClick}
            className="block px-4 py-2 cursor-pointer hover:bg-black hover:text-white"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-70}
            onClick={handleLinkClick}
            className="block px-4 py-2 cursor-pointer hover:bg-black hover:text-white"
          >
            Contact
          </Link>

          {/* Mobile Resume Button */}
          <a
            href="/Nasir_Imam_Resume_2025.pdf"
            download
            onClick={handleLinkClick}
            className="flex items-center gap-2 px-4 py-2 hover:bg-black hover:text-white transition"
          >
            Resume
            <FaDownload className="text-white" />
          </a>
        </div>
      )}
    </nav>
  );
}
