import { motion } from "framer-motion";

export default function BubblePop({ count = 18 }) {
  const bubbles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100, // 0-100%
    size: 20 + Math.random() * 70, // 20-90px
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 4,
    drift: (Math.random() - 0.5) * 100, // -50 to 50px
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b) => (
        <motion.span
          key={b.id}
          initial={{
            y: "110%",
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            y: "-20%",
            opacity: [0, 1, 1, 0],
            scale: [0.3, 1, 1, 0.7],
            x: [0, b.drift, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute rounded-full"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            background:
              "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.75), rgba(255,255,255,0.25) 40%, rgba(245,240,230,0.1) 70%, rgba(245,240,230,0.03) 100%)",
            boxShadow:
              "inset 0 2px 8px rgba(255,255,255,0.5), inset 0 -4px 10px rgba(0,0,0,0.15), 0 0 20px rgba(245,240,230,0.15)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          {/* Top shine */}
          <span
            className="absolute rounded-full bg-white/80 blur-[2px]"
            style={{
              top: "12%",
              left: "18%",
              width: "30%",
              height: "20%",
            }}
          />
          {/* Small shine */}
          <span
            className="absolute rounded-full bg-white/60 blur-[1px]"
            style={{
              top: "15%",
              right: "20%",
              width: "10%",
              height: "10%",
            }}
          />
        </motion.span>
      ))}
    </div>
  );
}