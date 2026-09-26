import { useState } from "react";
import { motion } from "framer-motion";
import { useProducts } from "../context/ProductContext";
import FeatureProduct from "../components/FeatureProduct";

export default function Products() {
  const { products } = useProducts();
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  const filters = [
    { key: "all", label: "All" },
    { key: "bossy", label: "Bossy" },
    { key: "casual", label: "Casual" },
    { key: "cool", label: "Cool" },
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16"
      >
        <p className="font-script text-2xl sm:text-3xl text-cream/70">
          the collection
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl mt-2 text-cream">
          All Products
        </h1>
        <p className="mt-4 text-sm sm:text-base text-cream/60 max-w-lg mx-auto">
          Explore every piece from The Muha Co — crafted for those who wear
          their attitude.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 sm:px-6 py-2 border text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 ${
              filter === f.key
                ? "bg-cream text-maroon border-cream"
                : "border-cream/40 text-cream/70 hover:border-cream hover:text-cream"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
      >
        {filtered.map((p, i) => (
          <FeatureProduct key={p.id} product={p} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-cream/50 mt-20">
          No products found in this category.
        </p>
      )}
    </div>
  );
}