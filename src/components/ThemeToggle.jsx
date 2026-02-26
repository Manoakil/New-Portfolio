import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        border-4 border-black dark:border-white
        px-4 py-1
        font-bold text-sm tracking-wide
        bg-white text-black
        dark:bg-black dark:text-white
        shadow-[4px_4px_0px_#000]
        dark:shadow-[4px_4px_0px_#fff]
        hover:translate-x-[1px] hover:translate-y-[1px]
        transition
      "
    >
      {dark ? "LIGHT" : "DARK"}
    </button>
  );
}
