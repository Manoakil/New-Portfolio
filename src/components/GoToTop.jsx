import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GoToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={handleClick}
          className="fixed right-6 bottom-8 z-50 bg-yellow-300 dark:bg-yellow-500 text-black dark:text-black px-4 py-3 rounded-lg shadow-[6px_6px_0px_#000] hover:scale-105 transition-transform"
          aria-label="Go to top"
        >
          ↑ TOP
        </motion.button>
      )}
    </AnimatePresence>
  );
}
