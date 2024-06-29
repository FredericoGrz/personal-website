type CardProjectProps = {
  project: {
    title: string;
    img: string;
    githubUrl: string;
    liveDemoUrl: string;
  };
};

export function CardProject({ project }: CardProjectProps) {
  return (
    <div className="border p-4 border-zinc-300 bg-zinc-100 flex flex-col gap-2 rounded-xl shadow-md">
      <img src={project.img} className="w-96 h-96 rounded-xl" />
      <p className="text-xl font-medium text-center">{project.title}</p>
      <div className="flex gap-2 items-center justify-center">
        <a
          href={project.githubUrl}
          className="py-2 px-6 border border-zinc-400 rounded-2xl"
          target="_blank"
        >
          Github
        </a>
        <a
          href={project.liveDemoUrl}
          className="py-2 px-6 border border-zinc-400 rounded-2xl"
          target="_blank"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
