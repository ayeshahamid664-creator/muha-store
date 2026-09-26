import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <p className="font-script text-2xl sm:text-3xl text-cream/70">
          get in touch
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl mt-2 text-cream">
          Contact Us
        </h1>
        <p className="mt-4 text-sm sm:text-base text-cream/60">
          Questions? Collabs? Just want to say hi? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 sm:gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 sm:space-y-8"
        >
          <div>
            <h3 className="uppercase tracking-widest text-xs text-cream/60 mb-2">
              Email
            </h3>
            <p className="text-cream text-base sm:text-lg break-all">
              hello@themuha.co
            </p>
          </div>
          <div>
            <h3 className="uppercase tracking-widest text-xs text-cream/60 mb-2">
              Phone
            </h3>
            <p className="text-cream text-base sm:text-lg">
              +92 300 0000000
            </p>
          </div>
          <div>
            <h3 className="uppercase tracking-widest text-xs text-cream/60 mb-2">
              Follow
            </h3>
            <p className="text-cream text-base sm:text-lg">@themuha.co</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-b border-cream/30 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-cream transition text-sm sm:text-base"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-b border-cream/30 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-cream transition text-sm sm:text-base"
          />
          <textarea
            required
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border-b border-cream/30 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-cream transition resize-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full bg-cream text-maroon py-3 uppercase tracking-widest text-xs hover:bg-cream/90 transition"
          >
            Send Message
          </button>
          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-cream/70 text-sm text-center"
            >
              ✓ Message sent! We'll be in touch soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </div>
  );
}