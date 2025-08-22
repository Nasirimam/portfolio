import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rqysp8k", // Your EmailJS Service ID
        "template_7pi3ya6", // Your EmailJS Template ID
        form.current,
        "KnDsc3OxyK9aQAhCZ" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully! 🚀");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message ❌ Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 text-black max-w-6xl mx-auto px-6"
    >
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
          ref={form}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-black transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-lg text-gray-700 text-center">
            You can also connect with me on:
          </p>
          <div className="flex space-x-6 text-3xl">
            <a
              href="https://github.com/Nasirimam"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:text-orange-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nasir-imam-673771244/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-orange-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:imamnasir73@gmail.com"
              className="text-red-600 hover:text-orange-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
