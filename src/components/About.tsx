import { useTranslation } from "react-i18next";
import logo from "../assets/logo-background.png";
import { CardAbout } from "./CardAbout";
import { Section } from "./Section";

export function About() {
  const { t } = useTranslation();

  return (
    <Section
      id="about"
      className="pt-4 flex flex-col gap-2 lg:justify-evenly lg:px-20 transition-all duration-500 ease-in-out"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className=" text-zinc-500 lg:text-xl transition-all duration-500 ease-in-out">
          {t("knowMore")}
        </p>
        <p className="text-3xl lg:text-5xl font-bold transition-all duration-500 ease-in-out">
          {t("aboutMe")}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 justify-center items-center transition-all duration-500 ease-in-out">
        <img
          src={logo}
          alt=""
          className="w-60 h-60 rounded-xl lg:w-96 lg:h-96 transition-all duration-500 ease-in-out"
        />
        <div className="flex flex-col gap-5 px-2 md:px-8 transition-all duration-500 ease-in-out">
          <div
            id="cards"
            className="flex justify-between gap-4 items-center w-full transition-all duration-500 ease-in-out"
          >
            <CardAbout
              type="Experience"
              title={t("experience")}
              primary={t("expYears")}
              secondary={t("frontendDevelopment")}
            />
            <CardAbout
              type="Education"
              title={t("education")}
              primary={t("informationSystem")}
              secondary={t("bachelors")}
            />
          </div>
          <p className="text-zinc-500 text-justify px-2 text-sm xl:text-base xl:mt-7 transition-all duration-500 ease-in-out">
            {t("aboutMeParagraph")}
          </p>
        </div>
      </div>
    </Section>
  );
}
