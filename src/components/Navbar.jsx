import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
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
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="The Muha Co" className="w-12 h-12 rounded-full" />
          <span className="font-script text-2xl text-cream">the Muha .Co</span>
        </Link>
        <ul className="flex gap-8 text-sm tracking-widest uppercase">
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
      </div>
    </motion.nav>
  );
}