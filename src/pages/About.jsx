export default function About() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-extrabold text-center mb-14">
        ABOUT ME
      </h2>

      <div className="grid gap-10 md:grid-cols-2">

        {/* About Panel */}
        <div
          className="
            border-4 border-black dark:border-white
            p-6
            shadow-[6px_6px_0px_#000]
            dark:shadow-[6px_6px_0px_#fff]
            rotate-[1deg]
          "
        >
          <p className="leading-relaxed mb-4">
            I am a software developer who enjoys building interactive
            and user-friendly applications by transforming ideas into
            functional products.
          </p>

          <p className="leading-relaxed">
            I work with modern frontend frameworks and backend APIs,
            and I continuously improve my skills through hands-on projects.
          </p>
        </div>

        {/* Skills Panel */}
        <div
          className="
            border-4 border-black dark:border-white
            p-6
            shadow-[6px_6px_0px_#000]
            dark:shadow-[6px_6px_0px_#fff]
            rotate-[-1deg]
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            SKILLS
          </h3>

          <ul className="space-y-2 text-sm leading-relaxed">
            <li>Frontend: React, Tailwind CSS, HTML, CSS, JavaScript</li>
            <li>Backend: FastAPI, Node.js (Basics)</li>
            <li>Database: PostgreSQL, MongoDB</li>
            <li>Tools: Git, GitHub, Postman</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
