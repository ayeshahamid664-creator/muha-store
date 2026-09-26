import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="The Muha Co"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
          <span className="font-script text-xl sm:text-2xl text-cream">
            the Muha .Co
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
          {links.map((l) => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={`relative transition-colors hover:text-cream ${
                  location.pathname === l.path ? "text-cream" : "text-cream/60"
                }`}
              >
                {l.label}
                {location.pathname === l.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-cream"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-cream/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 text-sm tracking-widest uppercase">
              {links.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2 transition-colors ${
                      location.pathname === l.path
                        ? "text-cream"
                        : "text-cream/60"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}