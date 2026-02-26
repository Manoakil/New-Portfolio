import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Home() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white">

      {/* Hero Panel */}
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <div
          className="
            inline-block
            border-4 border-black dark:border-white
            p-8
            shadow-[8px_8px_0px_#000]
            dark:shadow-[8px_8px_0px_#fff]
            rotate-[-1deg]
          "
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            JUNIOR DEVELOPER
          </h2>
          <p className="text-lg leading-relaxed">
            I build modern web applications using React, Tailwind CSS,
            FastAPI, and databases with a strong focus on clean UI
            and scalable backend systems.
          </p>
        </div>
      </div>

      <About />
      <Projects />
      <Education />
      <Experience />
    </section>
  );
}
