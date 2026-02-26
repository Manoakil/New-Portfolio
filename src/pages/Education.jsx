export default function Education() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-extrabold text-center mb-14">
        EDUCATION
      </h2>

      <div className="grid gap-10 md:grid-cols-2">

        <div
          className="
            border-4 border-black dark:border-white
            p-6
            shadow-[6px_6px_0px_#000]
            dark:shadow-[6px_6px_0px_#fff]
          "
        >
          <h3 className="text-xl font-bold mb-1">
            Bachelor of Engineering / Technology
          </h3>
          <p className="text-sm mb-2">
            Computer Science / Relevant Stream
          </p>
          <p className="text-xs mb-4">
            2021 – 2025
          </p>
          <p className="text-sm leading-relaxed">
            Focused on core computer science fundamentals, software
            development, and project-based learning.
          </p>
        </div>

        <div
          className="
            border-4 border-black dark:border-white
            p-6
            shadow-[6px_6px_0px_#000]
            dark:shadow-[6px_6px_0px_#fff]
          "
        >
          <h3 className="text-xl font-bold mb-1">
            Higher Secondary Education
          </h3>
          <p className="text-sm mb-2">
            Science Stream
          </p>
          <p className="text-xs mb-4">
            Completed
          </p>
          <p className="text-sm leading-relaxed">
            Built strong foundations in mathematics, logical thinking,
            and analytical problem-solving.
          </p>
        </div>

      </div>
    </section>
  );
}
