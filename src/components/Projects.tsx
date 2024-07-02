import { CardProject } from "./CardProject";
import { Section } from "./Section";
import stockDashboard from "../assets/stockDashboard.png";
import matchingGame from "../assets/matching-game.png";

export function Projects() {
  const projects = [
    {
      title: "Stock Dashboard",
      img: stockDashboard,
      githubUrl: "https://github.com/FredericoGrz/stock-dashboard",
      liveDemoUrl: "https://dulcet-tapioca-eca7a7.netlify.app",
    },
    {
      title: "Matching Game",
      img: matchingGame,
      githubUrl: "https://github.com/FredericoGrz/MemoryGame",
      liveDemoUrl: "https://aesthetic-pie-171530.netlify.app/",
    },
  ];

  return (
    <Section
      id="projects"
      className="pt-4 px-4 flex flex-col gap-4 lg:justify-evenly lg:px-20
      transition-all duration-500 ease-in-out"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className="text-zinc-500 lg:text-xl transition-all duration-500 ease-in-out">
          Browse My Recent
        </p>
        <p className="text-3xl lg:text-5xl font-bold transition-all duration-500 ease-in-out">
          Projects
        </p>
      </div>
      <div
        id="project-cards"
        className="flex flex-col gap-4 lg:flex-row lg:flex-wrap justify-center items-center"
      >
        {projects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
