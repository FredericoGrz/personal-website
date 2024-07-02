import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation();
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
      </nav>
      <div>
        <button
          type="button"
          className={`p-2 rounded-lg hover:bg-green-300 hover:scale-110 transition-transform ${
            i18n.language === "pt" && "bg-green-400 shadow-lg"
          }`}
          onClick={() => i18n.changeLanguage("pt")}
        >
          BR
        </button>
        <button
          type="button"
          className={`p-2 rounded-lg hover:bg-red-100 hover:scale-110 transition-transform ${
            i18n.language === "en" && "bg-red-200 shadow-lg"
          }`}
          onClick={() => i18n.changeLanguage("en")}
        >
          US
        </button>
      </div>
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
