import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const quotes = [
  "Wear Your Attitude",
  "Own Every Room",
  "Define Your Story",
];

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    const typingSpeed = isDeleting ? 40 : 100;
    const pauseTime = 1500;

    if (!isDeleting && displayed === currentQuote) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? currentQuote.substring(0, displayed.length - 1)
          : currentQuote.substring(0, displayed.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, quoteIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-maroon px-4 sm:px-6 pt-24 pb-16">
      {/* Animated Butterfly / Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-maroon-light rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-cream/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-script text-2xl sm:text-3xl text-cream/80"
        >
          the
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl md:text-9xl text-cream text-shadow"
        >
          Muha.Co
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 sm:mt-12 flex gap-3 sm:gap-4 justify-center flex-wrap"
        >
          <Link
            to="/bossy"
            className="px-5 sm:px-8 py-2.5 sm:py-3 border border-cream text-cream uppercase tracking-widest text-[10px] sm:text-xs hover:bg-cream hover:text-maroon transition-all duration-300"
          >
            Bossy
          </Link>
          <Link
            to="/casual"
            className="px-5 sm:px-8 py-2.5 sm:py-3 border border-cream text-cream uppercase tracking-widest text-[10px] sm:text-xs hover:bg-cream hover:text-maroon transition-all duration-300"
          >
            Casual
          </Link>
          <Link
            to="/cool"
            className="px-5 sm:px-8 py-2.5 sm:py-3 border border-cream text-cream uppercase tracking-widest text-[10px] sm:text-xs hover:bg-cream hover:text-maroon transition-all duration-300"
          >
            Cool
          </Link>
        </motion.div>

        {/* Typewriter Bubble-Letter Quote */}
        <div className="mt-10 sm:mt-14 min-h-[60px] sm:min-h-[90px] flex items-center justify-center">
          <div className="flex items-center justify-center flex-wrap gap-1 sm:gap-2 px-2">
            {displayed.split("").map((char, i) => {
              if (char === " ") {
                return (
                  <span
                    key={`${quoteIndex}-space-${i}`}
                    className="inline-block w-3 sm:w-6"
                  />
                );
              }
              return (
                <motion.span
                  key={`${quoteIndex}-${i}-${char}`}
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="bubble-letter"
                >
                  {char}
                </motion.span>
              );
            })}
            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              className="inline-block w-[3px] sm:w-[4px] h-6 sm:h-10 bg-cream/70 rounded-full ml-1"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-[10px] sm:text-xs tracking-widest uppercase"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}