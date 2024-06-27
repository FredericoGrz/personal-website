import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="w-full flex justify-between items-center pt-8 px-12 xl:px-36 transition-all duration-500 ease-in-out">
      <p className="text-xl md:text-2xl lg:text-3xl tracking-wide transition-all duration-500 ease-in-out">
        Antonio F. G. Gomes
      </p>
      <div className="gap-4 items-center hidden lg:flex">
        <button
          type="button"
          className="hover:font-medium  text-xl xl:text-2xl transition-all duration-500 ease-in-out"
        >
          About
        </button>
        <button
          type="button"
          className="hover:font-medium  text-xl xl:text-2xl transition-all duration-500 ease-in-out"
        >
          Experience
        </button>
        <button
          type="button"
          className="hover:font-medium  text-xl xl:text-2xl transition-all duration-500 ease-in-out"
        >
          Projects
        </button>
        <button
          type="button"
          className="hover:font-medium text-xl xl:text-2xl transition-all duration-500 ease-in-out"
        >
          Contact
        </button>
      </div>
      <button type="button" className="w-fit h-fit relative lg:hidden">
        <AiOutlineMenu
          className={`text-2xl ${isMenuOpen ? "hidden" : "block"}`}
          onClick={() => setIsMenuOpen(true)}
        />
        <MdOutlineClose
          className={`text-2xl ${isMenuOpen ? "block" : "hidden"}`}
          onClick={closeMenu}
        />
        <div
          className={`absolute -left-24 flex flex-col gap-1 w-fit text-center px-2 rounded-md text-lg ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <button type="button" className="hover:font-medium transition-all">
            About
          </button>
          <button type="button" className="hover:font-medium transition-all">
            Experience
          </button>
          <button type="button" className="hover:font-medium transition-all">
            Projects
          </button>
          <button type="button" className="hover:font-medium transition-all">
            Contact
          </button>
        </div>
      </button>
    </div>
  );
}
