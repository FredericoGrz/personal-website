import logo from "../assets/logo-background.png";
import { CardAbout } from "./CardAbout";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      className="pt-4 flex flex-col gap-2 lg:justify-evenly lg:px-20 transition-all duration-500 ease-in-out"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className=" text-zinc-500 lg:text-xl transition-all duration-500 ease-in-out">
          Get To Know More
        </p>
        <p className="text-3xl lg:text-5xl font-bold transition-all duration-500 ease-in-out">
          About Me
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
              title="Experience"
              primary="2+ years"
              secondary="Frontend Development"
            />
            <CardAbout
              type="Education"
              title="Education"
              primary="Information System"
              secondary="B.Sc. Bachelors Degree"
            />
          </div>
          <p className="text-zinc-500 text-justify px-2 text-sm xl:text-base xl:mt-7 transition-all duration-500 ease-in-out">
            My name is Antonio Frederico Graziani Gomes, 29 years old. I was
            born in the United States and spent a significant part of my life in
            Brazil. In 2016, I graduated with a degree in Information Systems.
            My career has been diverse, involving roles such as Project Leader
            for the launch of Google Assistant on various devices worldwide. For
            the past two years, I have been working as a Front-End Developer,
            honing my skills and contributing to various projects.
          </p>
        </div>
      </div>
    </Section>
  );
}
