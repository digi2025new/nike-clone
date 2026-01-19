import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import ThemeToggle from "./ThemeToggle";

const Nav = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50
                 glass-nav border-b border-white/30 dark:border-white/10"
    >
      <nav className="max-container flex items-center justify-between py-4 px-6">
        
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img src={headerLogo} alt="logo" className="w-[120px]" />
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <a
                href={item.href}
                className="font-montserrat text-lg
                  text-slate-gray dark:text-gray-200
                  hover:text-coral-red transition-colors"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <img src={hamburger} alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (ANIMATED) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-white/30 dark:border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-montserrat
                      text-slate-gray dark:text-gray-200
                      hover:text-coral-red transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
