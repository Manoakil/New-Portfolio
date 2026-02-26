export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-extrabold text-center mb-14">
        EXPERIENCE
      </h2>

      <div className="space-y-10">

        <div
          className="
            border-4 border-black dark:border-white
            p-6
            shadow-[6px_6px_0px_#000]
            dark:shadow-[6px_6px_0px_#fff]
          "
        >
          <div className="flex flex-col md:flex-row md:justify-between mb-3">
            <h3 className="text-xl font-bold">
              Frontend Developer Intern – CodeValue Technologies
            </h3>
            <span className="text-sm">
              Feb 2025 – May 2025
            </span>
          </div>

          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Developed reusable React components</li>
            <li>Improved UI responsiveness across devices</li>
            <li>Worked with team members on debugging and features</li>
          </ul>
        </div>

        <div
          className="
            border-4 border-black dark:border-white
            p-6
            shadow-[6px_6px_0px_#000]
            dark:shadow-[6px_6px_0px_#fff]
          "
        >
          <div className="flex flex-col md:flex-row md:justify-between mb-3">
            <h3 className="text-xl font-bold">
              Self Learning & Independent Practice
            </h3>
            <span className="text-sm">
              Aug 2025 – Present
            </span>
          </div>

          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Building full-stack applications with React and FastAPI</li>
            <li>Practicing backend APIs and authentication</li>
            <li>Improving SQL and API design skills</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
