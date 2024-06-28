import { FaTrophy } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";

type CardAboutProps = {
  type: "Experience" | "Education";
  title: string;
  primary: string;
  secondary: string;
};

export function CardAbout({ type, title, primary, secondary }: CardAboutProps) {
  return (
    <div className="p-4 min-h-40 flex w-full flex-col items-center justify-center border border-zinc-500 rounded-2xl">
      {type === "Education" ? (
        <IoSchool className="text-3xl mb-2" />
      ) : (
        <FaTrophy className="text-2xl mb-2" />
      )}
      <p className="font-medium text-lg">{title}</p>
      <p className="text-zinc-500">{primary}</p>
      <p className="text-zinc-500">{secondary}</p>
    </div>
  );
}
