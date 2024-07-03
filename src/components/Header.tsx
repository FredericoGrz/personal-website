import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="w-full flex justify-between items-center pt-8 px-5 sm:px-12 xl:px-36 transition-all duration-500 ease-in-out">
      <p className="text-xl md:text-2xl lg:text-3xl tracking-wide transition-all duration-500 ease-in-out">
        Antonio F. G. Gomes
      </p>

      <nav className="gap-4 items-center hidden lg:flex">
        {["about", "experience", "projects", "contact"].map((item) => (
          <a
            key={item}
            type="button"
            className="hover:font-medium cursor-pointer text-xl xl:text-2xl transition-all duration-150 ease-in-out"
            href={`#${item}`}
          >
            {t(item)}
          </a>
        ))}
        <LanguageSwitcher className="ml-5 lg:ml-10" />
      </nav>

      <div className="relative lg:hidden flex gap-0.5 sm:gap-4 items-center">
        <LanguageSwitcher />
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
            {["about", "experience", "projects", "contact"].map((item) => (
              <a
                key={item}
                type="button"
                className="hover:font-medium cursor-pointer transition-all text-lg"
                onClick={closeMenu}
                href={`#${item}`}
              >
                {t(item)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
