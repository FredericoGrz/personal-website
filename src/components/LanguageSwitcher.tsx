import { useTranslation } from "react-i18next";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  return (
    <div className={className}>
      <button
        type="button"
        className={`p-1 sm:p-2 sm:text-base rounded-lg hover:bg-green-300 hover:scale-110 transition-transform ${
          i18n.language === "pt" && "bg-green-400 shadow-lg"
        }`}
        onClick={() => i18n.changeLanguage("pt")}
      >
        BR
      </button>
      <button
        type="button"
        className={`p-1 text-sm sm:p-2 sm:text-base rounded-lg hover:bg-red-100 hover:scale-110 transition-transform ${
          i18n.language === "en" && "bg-red-200 shadow-lg"
        }`}
        onClick={() => i18n.changeLanguage("en")}
      >
        US
      </button>
    </div>
  );
}
