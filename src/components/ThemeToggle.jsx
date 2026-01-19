import { motion } from "framer-motion";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
      className="relative w-12 h-6 flex items-center rounded-full
                 bg-gray-300 dark:bg-slate-700
                 transition-colors duration-300
                 focus:outline-none"
    >
      {/* Sliding knob */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="absolute left-1 top-1 w-4 h-4 rounded-full
                   bg-white shadow-md"
        style={{
          x: darkMode ? 24 : 0,
        }}
      />

      {/* Icons */}
      <span className="absolute left-1 text-[10px] select-none">🌙</span>
      <span className="absolute right-1 text-[10px] select-none">☀️</span>
    </button>
  );
};

export default ThemeToggle;
