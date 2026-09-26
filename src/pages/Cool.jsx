import { motion } from "framer-motion";
import { useProducts } from "../context/ProductContext";
import FeatureProduct from "../components/FeatureProduct";
import BubblePop from "../components/BubblePop";
import CollectionHero from "../components/CollectionHero";

export default function Cool() {
  const { products } = useProducts();
  const items = products.filter((p) => p.category === "cool");

  return (
    <div className="min-h-screen bg-cool text-cream pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      <BubblePop count={20} />

      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <CollectionHero
          scriptText="the collection no. 03"
          title="Cool"
          description="Relaxed fits. Modern edge. For the ones who set the temperature, not follow it. Everyday pieces with quiet confidence."
          number="03"
          image="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200"
        />

        <div className="mt-24 mb-14 flex items-center gap-6">
          <span className="w-12 h-[1px] bg-cream/40" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-cream/50">
            The Pieces
          </p>
          <span className="flex-1 h-[1px] bg-cream/15" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-cream/40">
            {items.length} Items
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <FeatureProduct key={p.id} product={p} index={i} />
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-cream/50 mt-20">
            No products available in this collection yet.
          </p>
        )}
      </div>
    </div>
  );
}