import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `
      font-bold uppercase tracking-wide
      px-2 py-1
      border-b-2
      ${
        isActive
          ? "border-black dark:border-white"
          : "border-transparent hover:border-black dark:hover:border-white"
      }
    `;

  return (
    <nav
      className="
        bg-white dark:bg-black
        text-black dark:text-white
        border-b-4 border-black dark:border-white
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <a
          className="
            font-extrabold text-lg tracking-widest
            border-4 border-black dark:border-white
            px-3 py-1
            shadow-[4px_4px_0px_#000]
            dark:shadow-[4px_4px_0px_#fff]
          "
          href="/"
        >
          MANO
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-6 items-center text-sm">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/education" className={linkClass}>Education</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
