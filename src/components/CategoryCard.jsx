import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CategoryCard({ title, subtitle, image, path, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <Link to={path}>
        <div className="relative h-72 sm:h-96 md:h-[420px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-maroon-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-cream">
            <h3 className="font-serif text-2xl sm:text-4xl">{title}</h3>
            <p className="text-xs sm:text-sm text-cream/70 mt-1">
              {subtitle}
            </p>
            <motion.span
              className="inline-block mt-3 sm:mt-4 border-b border-cream text-[10px] sm:text-xs uppercase tracking-widest"
              whileHover={{ x: 5 }}
            >
              Explore →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}