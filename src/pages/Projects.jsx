import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-14">
        PROJECTS
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <ProjectCard
          title="Portfolio Website"
          desc="Personal portfolio website built with a modern frontend and a FastAPI backend."
          tech="React / Tailwind / FastAPI"
        />
      </div>
    </section>
  );
}
