export default function ProjectCard({ title, desc, tech }) {
  return (
    <div
      className="
        bg-white dark:bg-black
        text-black dark:text-white
        border-4 border-black dark:border-white
        p-5
        shadow-[6px_6px_0px_#000]
        dark:shadow-[6px_6px_0px_#fff]
        hover:-translate-y-1
        transition
      "
    >
      <h3 className="text-xl font-extrabold mb-2 tracking-tight">
        {title}
      </h3>

      <p className="text-sm leading-relaxed mb-4">
        {desc}
      </p>

      <div className="
        text-xs font-bold uppercase tracking-wider
        border-t-2 border-black dark:border-white
        pt-2
      ">
        {tech}
      </div>
    </div>
  );
}
