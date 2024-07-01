import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
export function Primary() {
  return (
    <div className="flex flex-col gap-4 w-full items-center pt-20 lg:flex-row lg:justify-center lg:gap-20 lg:pt-44">
      <div>
        <img
          src="https://github.com/fredericogrz.png"
          alt=""
          className="w-56 h-56 rounded-full lg:w-96 lg:h-96 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 items-center tracking-wider">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-lg lg:text-xl text-zinc-500 transition-all duration-500 ease-in-out">
            Hello, I'm
          </p>
          <p className="text-3xl lg:text-4xl font-bold transition-all duration-500 ease-in-out">
            Antonio Gomes
          </p>
          <p className="text-xl lg:text-2xl text-zinc-500 font-bold transition-all duration-500 ease-in-out">
            Frontend Developer
          </p>
        </div>
        <a
          className="border-2 cursor-pointer border-zinc-700 w-fit p-2 lg:text-lg rounded-xl hover:scale-110 transition-transform"
          href="#contact"
        >
          Contact Info
        </a>
        <div className="flex gap-2 items-center">
          <a
            className="w-fit hover:scale-105 transition-transform"
            href="https://www.linkedin.com/in/antoniofggomes/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl lg:text-3xl transition-all duration-500 ease-in-out" />
          </a>
          <a
            className="w-fit hover:scale-105 transition-transform"
            href="https://www.github.com/fredericogrz"
            target="_blank"
          >
            <FaGithubSquare className="text-2xl lg:text-3xl transition-all duration-500 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
}
