export default function Footer() {
  return (
    <footer className="
      mt-20 border-t-4 border-black dark:border-white
      bg-white dark:bg-black
      text-black dark:text-white
    ">
      <div className="
        max-w-6xl mx-auto px-6 py-8 text-center
      ">
        <div className="
          inline-block
          border-4 border-black dark:border-white
          px-6 py-4
          shadow-[6px_6px_0px_#000]
          dark:shadow-[6px_6px_0px_#fff]
        ">
          <p className="font-bold tracking-wide mb-2">
            © {new Date().getFullYear()} Manoakil
          </p>

          <p className="text-sm mb-4">
            Built with React, Tailwind CSS & FastAPI
          </p>

          <div className="flex justify-center gap-6 font-semibold text-sm">
            <a
              href="https://github.com/Manoakil"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-70"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-70"
            >
              LinkedIn
            </a>

            <a
              href="mailto:manoakil12@gmail.com"
              className="underline underline-offset-4 hover:opacity-70"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
