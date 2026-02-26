import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StatCard({ label, value = 0, emoji = "✨", unit = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let rafId;
    const start = performance.now();
    const duration = 700;
    const from = 0;
    const to = value;

    const loop = (t) => {
      const p = Math.min((t - start) / duration, 1);
      setCount(Math.floor(from + (to - from) * p));
      if (p < 1) rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [value]);

  return (
    <motion.div whileHover={{ scale: 1.03 }} className="comic-card border-4 border-black dark:border-white p-4 text-center">
      <div className="text-3xl font-extrabold mb-1">{emoji}</div>
      <div className="text-2xl font-extrabold">{count}{unit}</div>
      <div className="text-xs uppercase mt-1 font-bold">{label}</div>
    </motion.div>
  );
}
