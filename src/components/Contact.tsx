import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export function Contact() {
  return (
    <section
      id="contact"
      className="pt-10 flex flex-col items-center gap-4 lg:h-screen lg:justify-evenly transition-all duration-500 ease-in-out"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className=" text-zinc-500 lg:text-xl transition-all duration-500 ease-in-out">
          Get in Touch
        </p>
        <p className="text-3xl lg:text-5xl font-bold transition-all duration-500 ease-in-out">
          Contact Me
        </p>
      </div>
      <div className="p-4 lg:p-8  flex gap-5 items-center border border-zinc-400 shadow-lg rounded-xl transition-all duration-500 ease-in-out">
        <div className="flex gap-2 items-center">
          <IoMdMail className="lg:text-3xl transition-all duration-500 ease-in-out" />
          <a
            href="mailto:frederico.graz@gmail.com"
            className="lg:text-2xl transition-all duration-500 ease-in-out"
          >
            frederico.graz@gmail.com
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <FaLinkedin className="lg:text-3xl transition-all duration-500 ease-in-out" />
          <a
            href="https://www.linkedin.com/in/antoniofggomes/"
            className="lg:text-2xl transition-all duration-500 ease-in-out"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <footer className="flex flex-col gap-8 mb-10 lg:mb-0 justify-center items-center px-4 text-center transition-all duration-500 ease-in-out">
        <nav className="flex gap-2 lg:gap-8 transition-all duration-500 ease-in-out">
          <a
            href="#about"
            className="text-lg lg:text-2xl hover:text-zinc-600 hover:border-b-2 pb-2 transition-all duration-500 ease-in-out"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-lg lg:text-2xl hover:text-zinc-600 hover:border-b-2 pb-2 transition-all duration-500 ease-in-out"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-lg lg:text-2xl hover:text-zinc-600 hover:border-b-2 pb-2 transition-all duration-500 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg lg:text-2xl hover:text-zinc-600 hover:border-b-2 pb-2 transition-all duration-500 ease-in-out"
          >
            Contact
          </a>
        </nav>
        <p className="text-sm lg:text-base text-zinc-500 transition-all duration-500 ease-in-out">
          Copyright © 2023 Antonio Frederico Graziani Gomes. All Rights
          Reserved.
        </p>
      </footer>
    </section>
  );
}
