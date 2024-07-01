import { CardExperience } from "./CardExperience";
import { Section } from "./Section";

interface Experiences {
  title: string;
  level: "Basic" | "Intermediate" | "Experienced";
}

export function Experience() {
  const frontEndExperiences: Experiences[] = [
    {
      title: "HTML",
      level: "Experienced",
    },
    {
      title: "CSS",
      level: "Experienced",
    },
    {
      title: "JavaScript",
      level: "Experienced",
    },
    {
      title: "TypeScript",
      level: "Intermediate",
    },
    {
      title: "React",
      level: "Experienced",
    },
    {
      title: "React Native",
      level: "Basic",
    },
    {
      title: "TailwindCSS",
      level: "Experienced",
    },
    {
      title: "Styled-Components",
      level: "Experienced",
    },
  ];

  const backEndExperiences: Experiences[] = [
    {
      title: "Node JS",
      level: "Intermediate",
    },
    {
      title: "Express JS",
      level: "Intermediate",
    },
    {
      title: "C#",
      level: "Basic",
    },
    {
      title: "Git",
      level: "Experienced",
    },
    {
      title: "SQL",
      level: "Intermediate",
    },
    {
      title: "NoSQL",
      level: "Basic",
    },
    {
      title: "ORM",
      level: "Intermediate",
    },
    {
      title: "Jest",
      level: "Intermediate",
    },
  ];

  return (
    <Section
      id="experience"
      className="pt-4 flex flex-col gap-6 lg:justify-evenly lg:px-20 transition-all duration-500 ease-in-out"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className=" text-zinc-500 lg:text-xl transition-all duration-500 ease-in-out">
          Explore My
        </p>
        <p className="text-3xl lg:text-5xl font-bold transition-all duration-500 ease-in-out">
          Experience
        </p>
      </div>
      <div id="cards" className="flex flex-col gap-6 px-4 lg:flex-row">
        <CardExperience
          title="Frontend Development"
          skills={frontEndExperiences}
        />
        <CardExperience
          title="Backend Development & Soft Skills"
          skills={backEndExperiences}
        />
      </div>
    </Section>
  );
}
