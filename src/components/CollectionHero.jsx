import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CollectionHero({
  scriptText,
  title,
  description,
  number,
  accent = "cream",
  image,
}) {
  return (
    <div className="relative">
      {/* Big number watermark */}
      <motion.span
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-10 right-0 md:-top-24 md:right-8 font-serif text-[120px] sm:text-[180px] md:text-[320px] leading-none text-outline opacity-[0.08] select-none pointer-events-none"
      >
        {number}
      </motion.span>

      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream/60 hover:text-cream transition"
      >
        <span className="w-8 h-[1px] bg-cream/40" />
        Back Home
      </Link>

      <div className="mt-8 sm:mt-10 grid lg:grid-cols-12 gap-8 sm:gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[1px] bg-cream/40" />
            <p className="font-script text-xl sm:text-2xl md:text-3xl text-cream/70">
              {scriptText}
            </p>
          </div>

          <h1 className="font-serif text-[clamp(3rem,12vw,10rem)] leading-[0.9] text-cream tracking-tight">
            {title}
          </h1>

          <p className="mt-6 sm:mt-8 max-w-lg text-cream/60 leading-relaxed text-sm sm:text-base md:text-lg">
            {description}
          </p>

          {/* Small meta strip */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] uppercase tracking-[0.3em] text-cream/40">
            <span>Est. 2024</span>
            <span className="w-6 h-[1px] bg-cream/20" />
            <span>Handpicked</span>
            <span className="w-6 h-[1px] bg-cream/20" />
            <span>Limited</span>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] glass-strong p-2">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-[1.6rem]"
            />
            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 glass-strong px-3 sm:px-4 py-2 rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest text-cream"
            >
              The {title} Edit
            </motion.div>
          </div>

          {/* Decorative frame offset */}
          <div className="absolute -inset-3 rounded-[2.4rem] border border-cream/15 -z-10" />
        </motion.div>
      </div>
    </div>
  );
}