import { motion } from "framer-motion";
import { useProducts } from "../context/ProductContext";

const socials = [
  {
    name: "Instagram",
    handle: "@themuha.co",
    url: "https://instagram.com/themuha.co",
    color: "from-pink-500 via-red-500 to-yellow-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a5 5 0 110 10 5 5 0 010-10zm0 8.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm6.4-8.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+92 300 0000000",
    url: "https://wa.me/923000000000?text=Hi!%20I%20want%20to%20order%20from%20The%20Muha%20Co",
    color: "from-green-500 to-green-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@themuha.co",
    url: "https://tiktok.com/@themuha.co",
    color: "from-black via-gray-800 to-cyan-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16.6 5.8c-1-.7-1.7-1.8-1.9-3.1h-2.9v12.4c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V9.7c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4V9.5c1 .8 2.3 1.3 3.7 1.3V7.9c-.6 0-1.2-.2-1.8-.5z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "The Muha Co",
    url: "https://facebook.com/themuha.co",
    color: "from-blue-500 to-blue-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
      </svg>
    ),
  },
];

export default function ConnectSection() {
  const { products } = useProducts();
  const showcase = products.slice(0, 6);

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-maroon overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Grain */}
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-script text-2xl sm:text-3xl text-cream/70">
            let's connect
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl mt-3 text-cream leading-tight">
            DM for Orders <span className="text-cream/40">·</span> Let's Talk
            Style
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-cream/60 max-w-xl mx-auto px-2">
            Slide into our DMs, drop a message, or just say hi. Your next
            favorite piece is one tap away.
          </p>

          {/* Divider */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4">
            <span className="w-10 sm:w-16 h-[1px] bg-cream/30" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-cream/50">
              @themuha.co
            </span>
            <span className="w-10 sm:w-16 h-[1px] bg-cream/30" />
          </div>
        </motion.div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-14 sm:mb-20">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/5 backdrop-blur-sm p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-500 hover:border-cream/30"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-cream group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>

              <h3 className="relative z-10 font-serif text-lg sm:text-xl text-cream mt-3 sm:mt-4">
                {s.name}
              </h3>
              <p className="relative z-10 text-[10px] sm:text-xs text-cream/50 mt-1 tracking-wider break-all">
                {s.handle}
              </p>

              <span className="relative z-10 mt-3 sm:mt-4 text-[9px] sm:text-[10px] uppercase tracking-widest text-cream/60 group-hover:text-cream transition">
                Connect →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Product Showcase Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            <span className="w-8 sm:w-12 h-[1px] bg-cream/40" />
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-cream/50 whitespace-nowrap">
              Tag Us
            </p>
            <span className="flex-1 h-[1px] bg-cream/15" />
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-cream/40 whitespace-nowrap">
              #TheMuhaCo
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
            {showcase.map((p, i) => (
              <motion.a
                key={p.id}
                href="https://instagram.com/themuha.co"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square rounded-xl overflow-hidden border border-cream/10"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-maroon-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-cream text-2xl">♥</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 sm:mt-20 text-center"
        >
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-cream/80">
            "Your vibe. Your style. Your story."
          </p>
          <p className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-cream/40">
            — The Muha Co
          </p>
        </motion.div>
      </div>
    </section>
  );
}