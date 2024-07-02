import { useTranslation } from "react-i18next";
import { BsPatchCheckFill } from "react-icons/bs";

type CardExperienceProps = {
  title: string;
  skills: {
    title: string;
    level: "Basic" | "Intermediate" | "Experienced";
  }[];
};

export function CardExperience({ title, skills }: CardExperienceProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 p-4 lg:w-1/2 border border-zinc-500 rounded-xl items-center">
      <p className="font-bold text-zinc-500 text-xl">{title}</p>
      <div id="skills" className="flex gap-y-9 flex-wrap">
        {skills &&
          skills.map((skill, index) => (
            <div
              key={index}
              className="flex gap-2 w-1/2 pl-8 sm:pl-28 lg:pl-8 xl:pl-20 2xl:pl-24 transition-all duration-500 ease-in-out"
            >
              <BsPatchCheckFill className="text-2xl" />
              <div>
                <p className="font-bold">{skill.title}</p>
                <p className="text-zinc-500">{t(skill.level.toLowerCase())}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
