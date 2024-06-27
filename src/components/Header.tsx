import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="w-full flex justify-between items-center pt-8 px-12 xl:px-36 transition-all duration-500 ease-in-out">
      <p className="text-xl md:text-2xl lg:text-3xl tracking-wide transition-all duration-500 ease-in-out">
        Antonio F. G. Gomes
      </p>
      <nav className="gap-4 items-center hidden lg:flex">
        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <button
            key={item}
            type="button"
            className="hover:font-medium text-xl xl:text-2xl transition-all duration-500 ease-in-out"
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="relative lg:hidden">
        <button
          type="button"
          className="w-fit h-fit"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <MdOutlineClose className="text-2xl" />
          ) : (
            <AiOutlineMenu className="text-2xl" />
          )}
        </button>
        {isMenuOpen && (
          <nav className="absolute right-0 mt-2 flex flex-col gap-2 w-40 bg-white shadow-md rounded-md p-2">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                type="button"
                className="hover:font-medium transition-all text-lg"
                onClick={closeMenu}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
