import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="font-script text-3xl text-cream/70">about us</p>
        <h1 className="font-serif text-6xl md:text-7xl mt-2 text-cream">
          The Muha Co
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
            alt="Our Story"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl text-cream leading-snug">
            Born from attitude. <br /> Built for the bold.
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed">
            The Muha Co started with a simple belief — fashion shouldn't just
            clothe you, it should speak for you. Every stitch, every silhouette,
            every color is chosen to reflect the confidence you carry.
          </p>
          <p className="mt-4 text-cream/70 leading-relaxed">
            From sharp, commanding <span className="text-cream font-medium">Bossy</span> pieces
            to effortless <span className="text-cream font-medium">Casual</span> essentials
            and modern, relaxed <span className="text-cream font-medium">Cool</span> vibes —
            we design for every version of you.
          </p>
        </div>
      </motion.div>

      {/* Values */}
      <div className="mt-24 grid md:grid-cols-3 gap-8">
        {[
          { title: "Quality", desc: "Premium fabrics, crafted to last." },
          { title: "Identity", desc: "Every piece tells your story." },
          { title: "Confidence", desc: "Wear it like you own the room." },
        ].map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass p-8 rounded-2xl text-center"
          >
            <h3 className="font-serif text-2xl text-cream">{v.title}</h3>
            <p className="mt-3 text-sm text-cream/60">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}