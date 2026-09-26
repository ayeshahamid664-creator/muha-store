import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import FeatureProduct from "../components/FeatureProduct";
import ConnectSection from "../components/ConnectSection";
import { useProducts } from "../context/ProductContext";

export default function Home() {
  const { products } = useProducts();

  const categories = [
    {
      title: "Bossy",
      subtitle: "Command the room",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
      path: "/bossy",
    },
    {
      title: "Casual",
      subtitle: "Effortless everyday",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
      path: "/casual",
    },
    {
      title: "Cool",
      subtitle: "Own your vibe",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
      path: "/cool",
    },
  ];

  return (
    <div>
      <Hero />

      {/* Featured Products */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-maroon-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="font-script text-xl sm:text-2xl text-cream/70">
              Trending Now
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl mt-2 text-cream">
              Featured Pieces
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {products.slice(0, 4).map((p, i) => (
              <FeatureProduct key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-script text-xl sm:text-2xl text-cream/70">
            Our Collections
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl mt-2 text-cream">
            Pick Your Vibe
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((c, i) => (
            <CategoryCard key={c.title} {...c} delay={i * 0.15} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-script text-2xl sm:text-3xl text-cream/80"
        >
          Our Story
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl sm:text-4xl mt-4 text-cream leading-snug"
        >
          "Fashion is not just what you wear — <br className="hidden sm:block" />{" "}
          it's how you own it."
        </motion.h3>
        <p className="mt-5 sm:mt-6 text-sm sm:text-base text-cream/60 max-w-2xl mx-auto">
          The Muha Co is more than a clothing brand. It's a statement. Born
          from the idea that every person carries a unique attitude, we craft
          pieces that speak before you do.
        </p>
      </section>

      {/* ✨ Connect Section */}
      <ConnectSection />
    </div>
  );
}